import React, { useState } from 'react';
import { X, Loader } from 'lucide-react';
import ReportForm from './ReportForm';

const ReportFormModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch('https://ireporter-server-hb42.onrender.com/api/records', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit report');
      }

      const result = await response.json();
      console.log('Report submitted successfully:', result);
      setSuccess(true);
    } catch (error) {
      console.error('Error submitting report:', error);
      setError(error.message || 'There was an error submitting your report. Please try again.');
    } finally {
      setIsSubmitting(false);
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
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-deep-blue">Submit a Report</h2>
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
        {success ? (
          <div className="text-green-500 mb-4">
            Report submitted successfully! Thank you for your contribution.
            <button 
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-deep-blue text-white rounded-md"
            >
              Close
            </button>
          </div>
        ) : (
          <ReportForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        )}
      </div>
    </div>
  );
};

export default ReportFormModal;