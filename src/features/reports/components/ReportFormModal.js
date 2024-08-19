import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import MultiStepForm from './MultiStepForm';
import styles from '../../../styling/reports/ReportModal.module.css';

const ReportModalPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/'); // Navigate back to home page when modal is closed
  };

  useEffect(() => {
    // Open the modal automatically when the page loads
    setIsModalOpen(true);
  }, []);

  if (!isModalOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Submit a Report</h2>
          <button 
            onClick={handleCloseModal} 
            className={styles.closeButton}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        <MultiStepForm 
          onSubmitSuccess={() => {
            // Handle successful submission (e.g., show a success message)
            alert('Report submitted successfully!');
            handleCloseModal();
          }}
        />
      </div>
    </div>
  );
};

export default ReportModalPage;