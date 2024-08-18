import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReportFormModal from '../../reports/components/ReportFormModal'; 

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

  return (
    <div className="report-modal-page">
      <ReportFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default ReportModalPage;