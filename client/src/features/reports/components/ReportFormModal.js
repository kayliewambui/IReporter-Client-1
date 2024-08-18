
import React, { useState, useEffect } from 'react';
import { X, Loader, AlertCircle, Mail } from 'lucide-react';
import ReportForm from './ReportForm';
import Login from '../../auth/components/Login';
import Signup from '../../auth/components/Signup';
import { useAuth } from '../../hooks/useAuth';


const ReportFormModal = ({ isOpen, onClose }) => {
  const { user, login, register, checkUserExists, sendVerificationEmail } = useAuth();
  const [modalState, setModalState] = useState('initial');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [verificationSent, setVerificationSent] = useState(false);

  useEffect(() => {
    if (user) {
      if (user.is_admin) {
        setModalState('adminMessage');
      } else if (!user.is_verified && Date.now() - new Date(user.created_at).getTime() > 24 * 60 * 60 * 1000) {
        setModalState('verificationRequired');
      } else {
        setModalState('form');
      }
    }
  }, [user]);

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      if (user.is_admin) {
        throw new Error('Admins are not allowed to submit reports.');
      }
      const response = await fetch('http://your-flask-api.com/reports', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit report');
      }

      const result = await response.json();
      console.log('Report submitted successfully:', result);
      alert('Report submitted successfully!');
      onClose();
    } catch (error) {
      console.error('Error submitting report:', error);
      setError(error.message || 'There was an error submitting your report. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReportNowClick = async () => {
    setIsSubmitting(true);
    setError(null);
    try {
      if (user) {
        if (user.is_admin) {
          setModalState('adminMessage');
        } else if (!user.is_verified && Date.now() - new Date(user.created_at).getTime() > 24 * 60 * 60 * 1000) {
          setModalState('verificationRequired');
        } else {
          setModalState('form');
        }
      } else {
        const userExists = await checkUserExists(user.email);
        setModalState(userExists ? 'login' : 'register');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogin = async (credentials) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const loggedInUser = await login(credentials);
      if (loggedInUser.is_admin) {
        setModalState('adminMessage');
      } else if (!loggedInUser.is_verified && Date.now() - new Date(loggedInUser.created_at).getTime() > 24 * 60 * 60 * 1000) {
        setModalState('verificationRequired');
      } else {
        setModalState('form');
      }
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegister = async (userData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      if (userData.email.endsWith('@admin.com')) {  // Replace with your admin domain
        throw new Error('Admin emails are not allowed to register as regular users.');
      }
      const newUser = await register(userData);
      await login(userData);  // Automatically log in after registration
      await sendVerificationEmail();
      setVerificationSent(true);
      setModalState('form');  // Allow access to form immediately
    } catch (error) {
      setError('Registration failed. ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendVerification = async () => {
    setIsSubmitting(true);
    setError(null);
    try {
      await sendVerificationEmail();
      setVerificationSent(true);
    } catch (error) {
      setError('Failed to send verification email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderContent = () => {
    switch (modalState) {
      case 'initial':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-deep-blue">Submit a Report</h2>
            <button 
              onClick={handleReportNowClick}
              className="w-full px-4 py-2 bg-deep-blue text-white rounded-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loader className="animate-spin" /> : 'Report Now'}
            </button>
          </div>
        );
      case 'login':
        return <Login onLogin={handleLogin} isSubmitting={isSubmitting} />;
      case 'register':
        return <Signup onRegister={handleRegister} isSubmitting={isSubmitting} />;
      case 'form':
        return (
          <>
            {verificationSent && (
              <div className="mb-4 p-4 bg-yellow-100 text-yellow-700 rounded-md">
                <Mail className="inline-block mr-2" />
                A verification email has been sent. Please verify your email within 24 hours to continue using the app.
              </div>
            )}
            <ReportForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
          </>
        );
      case 'adminMessage':
        return (
          <div className="space-y-4 text-center">
            <AlertCircle className="mx-auto text-yellow-500" size={48} />
            <h3 className="text-xl font-semibold text-deep-blue">Admin Access</h3>
            <p className="text-gray-600">
              As an admin user, you cannot submit reports. Please use the admin dashboard to manage existing reports.
            </p>
            <button 
              onClick={onClose}
              className="px-4 py-2 bg-deep-blue text-white rounded-md"
            >
              Go to Admin Dashboard
            </button>
          </div>
        );
      case 'verificationRequired':
        return (
          <div className="space-y-4 text-center">
            <Mail className="mx-auto text-yellow-500" size={48} />
            <h3 className="text-xl font-semibold text-deep-blue">Email Verification Required</h3>
            <p className="text-gray-600">
              Please verify your email to continue using the app. If you haven't received the verification email, you can resend it.
            </p>
            <button 
              onClick={handleResendVerification}
              className="px-4 py-2 bg-deep-blue text-white rounded-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loader className="animate-spin" /> : 'Resend Verification Email'}
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >

        {/* Default state */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-deep-blue">
            {modalState === 'form' ? 'Submit a Report' : 'Authentication Required'}
          </h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700" 
            disabled={isSubmitting}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {renderContent()}
      </div>
    </div>
  );
};

export default ReportFormModal;