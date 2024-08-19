
  
  import React, { useState, useEffect } from 'react';
  import { useForm, Controller } from 'react-hook-form';
  import { AlertCircle, FileText, MapPinned, Upload, Info, CheckCircle, Send, ArrowLeft, ArrowRight } from 'lucide-react';
  import { CSSTransition, TransitionGroup } from 'react-transition-group';
  import ReportFormLocationInput from './ReportFormLocationInput';
  import styles from '../../../styling/reports/MultiStepForm.module.css';
  
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  
  const MultiStepForm = ({ onSubmitSuccess }) => {
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(0);
    const { control, handleSubmit, watch, formState: { errors }, setValue, getValues, setError } = useForm();
    const watchType = watch("record_type");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [files, setFiles] = useState([]);
    const [fileError, setFileError] = useState(null);
    
  
    useEffect(() => {
      setProgress((step / 7) * 100);
    }, [step]);
  
    const handleFileChange = (event) => {
      const newFiles = Array.from(event.target.files);
      setFileError(null);
  
      newFiles.forEach(file => {
        if (file.size > MAX_FILE_SIZE) {
          setFileError(`${file.name} is too large. Maximum size is 5MB.`);
          return;
        }
  
        if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
          setFiles(prev => [...prev, file]);
        } else {
          setFileError(`${file.name} is not a supported file type.`);
        }
      });
    };
  
    const removeFile = (index) => {
      setFiles(prev => prev.filter((_, i) => i !== index));
    };
  
    // const uploadToCloudinary = async (file) => {
    //   const formData = new FormData();
    //   formData.append('file', file);
    //   formData.append('upload_preset', 'your_upload_preset');
  
    //   const response = await fetch(`https://api.cloudinary.com/v1_1/dycrqnjcs/auto/upload`, {
    //     method: 'POST',
    //     body: formData
    //   });
  
    //   if (!response.ok) {
    //     throw new Error('Failed to upload file to Cloudinary');
    //   }
  
    //   const data = await response.json();
    //   return data.secure_url;
    // };
  
    const onSubmit = async (data) => {
      setIsSubmitting(true);
      setSubmitError(null);
      try {
        const token = sessionStorage.getItem('access_token');
    
        const formData = new FormData();
        formData.append('record_type', data.record_type);
        formData.append('description', data.description);
        formData.append('location', data.location);
        formData.append('latitude', data.latitude);
        formData.append('longitude', data.longitude);
        formData.append('additional_info', data.additionalInfo);
    
        // Append files to FormData
        files.forEach(file => formData.append('files', file));
    
        // Submit the report with files to the backend
        const response = await fetch('https://ireporter-server-hb42.onrender.com/api/records', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });
    
        if (!response.ok) {
          throw new Error('Failed to submit report');
        }
    
        const result = await response.json();
        console.log('Report submitted successfully:', result);
        onSubmitSuccess();
      } catch (error) {
        console.error('Error submitting report:', error);
        setSubmitError('There was an error submitting your report. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    };
    
  
  const handleNext = () => {
    switch(step) {
      case 1:
        if (getValues('record_type')) {
          setStep(step + 1);
        } else {
          setError('record_type', { type: 'required', message: 'Please select a report type' });
        }
        break;
      case 2:
        if (getValues('description') && getValues('description').length >= 5) {
          setStep(step + 1);
        } else {
          setError('description', { type: 'required', message: 'Please provide a description of at least 20 characters' });
        }
        break;
      case 3:
        if (getValues('location')) {
          setStep(step + 1);
        } else {
          setError('location', { type: 'required', message: 'Please provide a location' });
        }
        break;
      case 4:
        // Files are optional, so we can move to the next step regardless
        setStep(step + 1);
        break;
      case 5:
        // Additional info is optional, so we can move to the next step regardless
        setStep(step + 1);
        break;
      default:
        setStep(step + 1);
    }
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className={styles.stepContainer}>
            <h2 className={styles.stepTitle}>
              <AlertCircle className={styles.stepIcon} /> Choose Report Type
            </h2>
            <p className={styles.stepDescription}>Select the type of report you'd like to submit:</p>
            <Controller
              name="record_type"
              control={control}
              rules={{ required: "Please select a report type" }}
              render={({ field }) => (
                <div className={styles.buttonGroup}>
                  <button
                    type="button"
                    onClick={() => field.onChange("red-flag")}
                    className={`${styles.choiceButton} ${field.value === "red-flag" ? styles.active : ''}`}
                  >
                    Corruption Report
                  </button>
                  <button
                    type="button"
                    onClick={() => field.onChange("intervention")}
                    className={`${styles.choiceButton} ${field.value === "intervention" ? styles.active : ''}`}
                  >
                    Intervention Request
                  </button>
                </div>
              )}
            />
            {errors.record_type && <p className={styles.errorMessage}>{errors.record_type.message}</p>}
          </div>
        );
      case 2:
        return (
          <div className={styles.stepContainer}>
            <h2 className={styles.stepTitle}>
              <FileText className={styles.stepIcon} /> Provide Details
            </h2>
            <p className={styles.stepDescription}>Describe the {watchType === "red-flag" ? "corruption incident" : "intervention needed"} in detail:</p>
            <Controller
              name="description"
              control={control}
              rules={{ required: "Please provide a description", minLength: { value: 20, message: "Description should be at least 20 characters long" } }}
              render={({ field }) => (
                <textarea
                  {...field}
                  className={styles.textarea}
                  rows="6"
                  placeholder="Enter your detailed description here..."
                />
              )}
            />
            {errors.description && <p className={styles.errorMessage}>{errors.description.message}</p>}
          </div>
        );
      case 3:
        return (
          <div className={styles.stepContainer}>
            <h2 className={styles.stepTitle}>
              <MapPinned className={styles.stepIcon} /> Location Information
            </h2>
            <p className={styles.stepDescription}>Provide the location where this incident occurred:</p>
            <Controller
              name="location"
              control={control}
              rules={{ required: "Please provide a location" }}
              render={({ field }) => (
                <ReportFormLocationInput
                  onLocationChange={(locationData) => {
                    field.onChange(locationData.address);
                    setValue('latitude', locationData.lat);
                    setValue('longitude', locationData.lng);
                  }}
                  initialValue={field.value}
                />
              )}
            />
            {errors.location && <p className={styles.errorMessage}>{errors.location.message}</p>}
          </div>
        );
      case 4:
        return (
          <div className={styles.stepContainer}>
            <h2 className={styles.stepTitle}>
              <Upload className={styles.stepIcon} /> Upload Evidence
            </h2>
            <p className={styles.stepDescription}>Upload any relevant photos or videos:</p>
            <div className={styles.fileUpload}>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className={styles.fileInput}
                accept="image/*,video/*"
              />
              <button type="button" className={styles.uploadButton}>
                <Upload size={20} /> Choose Files
              </button>
            </div>
            {fileError && <p className={styles.errorMessage}>{fileError}</p>}
            {files.length > 0 && (
              <div className={styles.fileList}>
                <h3>Selected Files:</h3>
                <ul>
                  {files.map((file, index) => (
                    <li key={index}>
                      {file.name}
                      <button onClick={() => removeFile(index)}>Remove</button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      case 5:
        return (
          <div className={styles.stepContainer}>
            <h2 className={styles.stepTitle}>
              <Info className={styles.stepIcon} /> Additional Information
            </h2>
            <p className={styles.stepDescription}>Provide any additional context or information:</p>
            <Controller
              name="additionalInfo"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  className={styles.textarea}
                  rows="4"
                  placeholder="Any additional context or information..."
                />
              )}
            />
          </div>
        );
      case 6:
        return (
          <div className={styles.stepContainer}>
            <h2 className={styles.stepTitle}>
              <CheckCircle className={styles.stepIcon} /> Review Your Report
            </h2>
            <p className={styles.stepDescription}>Please review your report before submitting:</p>
            <div className={styles.summary}>
              <p><strong>Report Type:</strong> {watchType}</p>
              <p><strong>Description:</strong> {getValues('description')}</p>
              <p><strong>Location:</strong> {getValues('location')}</p>
              <p><strong>Files Attached:</strong> {files.length}</p>
              <p><strong>Additional Info:</strong> {getValues('additionalInfo')}</p>
            </div>
            <Controller
              name="verificationCheckbox"
              control={control}
              rules={{ required: "Please confirm the information is correct" }}
              render={({ field }) => (
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" {...field} />
                  <span>I confirm that the information provided is true to the best of my knowledge</span>
                </label>
              )}
            />
            {errors.verificationCheckbox && <p className={styles.errorMessage}>{errors.verificationCheckbox.message}</p>}
          </div>
        );
      case 7:
        return (
          <div className={styles.stepContainer}>
            <Send className={styles.successIcon} size={64} />
            <h2 className={styles.stepTitle}>Report Submitted Successfully!</h2>
            <p className={styles.stepDescription}>Thank you for your contribution to making our community better.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.formContainer}>
      {step < 7 && (
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className={styles.stepIndicator}>Step {step} of 7</div>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <TransitionGroup>
          <CSSTransition
            key={step}
            timeout={300}
            classNames={{
              enter: styles.slideEnter,
              enterActive: styles.slideEnterActive,
              exit: styles.slideExit,
              exitActive: styles.slideExitActive,
            }}
          >
            {renderStep()}
          </CSSTransition>
        </TransitionGroup>
        {submitError && <p className={styles.errorMessage}>{submitError}</p>}
        {step < 7 && (
          <div className={styles.navigation}>
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className={`${styles.navButton} ${styles.prevButton}`}
              disabled={step === 1}
            >
              <ArrowLeft size={20} /> Previous
            </button>
            {step < 6 && (
              <button
                type="button"
                onClick={handleNext}
                className={`${styles.navButton} ${styles.nextButton}`}
              >
                Next <ArrowRight size={20} />
              </button>
            )}
            {step === 6 && (
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting || !getValues('verificationCheckbox')}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Report'}
              </button>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;