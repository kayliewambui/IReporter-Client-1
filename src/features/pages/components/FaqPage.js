import React, { useState } from 'react';
import styles from '../../../styling/page/FAQ.module.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button
        className={`${styles.faqQuestion} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className={styles.faqAnswer}>{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What happens if my report is marked as \"Rejected\"?",
      answer: "If your report is marked as \"Rejected\", it means that our team determined that the issue reported does not fall within our scope, lacks sufficient information, or has been previously addressed. You will receive a notification explaining the reason for the rejection. If you have additional information or believe the rejection was in error, you can reply to the notification to appeal the decision."
    },
    {
      question: "Can I submit a report in my local language?",
      answer: "Yes, iReporter supports reports in all major local languages. When submitting your report, simply select your preferred language from the dropdown menu. Our team of multilingual reviewers will ensure that your report is properly translated and forwarded to the relevant authorities. Language should never be a barrier to speaking up."
    },
    {
      question: "Is there a limit to how many reports I can submit?",
      answer: "No, there is no limit to the number of reports you can submit. We encourage you to report any and all instances of corruption, misconduct, or public safety concerns that you encounter. However, please ensure that each report is genuine and substantiated to the best of your knowledge. Submitting false or frivolous reports can undermine the credibility of the platform."
    },
    {
      question: "What if I can't access the internet to submit a report?",
      answer: "If you don't have internet access, you can submit your report via SMS. Simply compose a text message with the details of the incident and send it to our dedicated short code. Our system will process your report and send you a confirmation via SMS. Please keep in mind that SMS reports may take slightly longer to process than online submissions."
    },
    {
      question: "Can I track the progress of my report?",
      answer: "Yes, you can track the progress of your report through your iReporter user dashboard. Simply log in to your account and navigate to the \"My Reports\" section. There, you'll see the status of each report you've submitted, along with any updates or messages from our team. You can also opt-in to receive progress notifications via email or SMS."
    },
    {
      question: "What if I remember additional details after submitting my report?",
      answer: "If you recall additional details after submitting your report, you can provide this information by replying to the confirmation email or SMS you received upon submission. Alternatively, you can log in to your iReporter account, locate the relevant report in your dashboard, and add the new details as a comment. Our team will review the additional information and update the report accordingly."
    },
    {
      question: "Can I withdraw my report after submitting it?",
      answer: "Yes, you can withdraw your report within 24 hours of submission, as long as it hasn't been marked as \"Under Investigation\". To withdraw a report, log in to your iReporter account, go to the \"My Reports\" section, and click the \"Withdraw\" button next to the relevant report. Please note that withdrawn reports are permanently deleted from our system and cannot be resubmitted."
    },
    {
      question: "Is there a way to report issues anonymously?",
      answer: "Yes, iReporter allows you to submit reports anonymously. When creating your account, simply select the \"Report Anonymously\" option. You will not be required to provide any personal information. However, please note that anonymous reports may be more difficult for authorities to investigate and may not be eligible for certain whistleblower protections. We encourage you to create a confidential account for the best balance of privacy and effectiveness."
    }
  ];

  return (
    <div className={styles.faqList}>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
      
      <p className={styles.reassurance}>
        Your safety, privacy, and empowerment are our top priorities. If you have any more questions, please don't hesitate to reach out to our support team. We're here to help you navigate the reporting process and make your voice heard.
      </p>
      
      <button className={styles.viewAllButton}>View All FAQs</button>
    </div>
  );
};

export default FAQ;
