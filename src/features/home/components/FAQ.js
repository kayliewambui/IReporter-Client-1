import React, { useState } from 'react';
import styles from '../../../styling/home/FAQ.module.css';

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
      question: "How does iReporter protect my identity?",
      answer: "Your safety is our top priority. We use advanced encryption and anonymization techniques to protect your identity. You can choose to report anonymously, and we never share your personal details with anyone, including authorities. Rest assured, you can speak up without fear of exposure."
    },
    {
      question: "What happens after I submit a report?",
      answer: "Your voice sets change in motion. Once submitted, your report is securely reviewed by our team. We then forward it to the appropriate authorities for action. You'll receive updates at every stage, from review to resolution. Your report could be the catalyst for significant positive change in your community."
    },
    {
      question: "Can I really make a difference with just one report?",
      answer: "Absolutely! Every major change starts with one voice. Your report could be the tipping point that sparks an investigation or the final piece of evidence needed for action. Remember, many of our success stories started with a single, courageous report. Your contribution matters more than you might think."
    },
    {
      question: "Is it safe to upload photos or videos as evidence?",
      answer: "Yes, it's safe. We strip all metadata (like location and device information) from your uploads to protect your identity. Our secure servers ensure your evidence remains confidential until it reaches the right authorities. Your visual evidence can be crucial in driving action, so don't hesitate to include it."
    },
    {
      question: "How long does it take to see results from my report?",
      answer: "The timeline can vary depending on the complexity of the issue. Some reports lead to immediate action, while others may take weeks or months to resolve. What's important is that every verified report is acted upon. We keep you updated throughout the process, so you'll always know the status of your contribution to positive change."
    }
  ];

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.title}>Got Questions? We've Got Answers</h2>
      <p className={styles.subtitle}>Your concerns matter. Let's address them together.</p>
      
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      
      <p className={styles.reassurance}>
        Still have questions? We're here to support you every step of the way. Your courage to speak up deserves our full commitment to your concerns.
      </p>
      
      <button className={styles.viewAllButton}>View All FAQs</button>
    </div>
  );
};

export default FAQ;