import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';

const FooterWrapper = () => {
  const location = useLocation();

  if (
    location.pathname.includes('/report') ||
    location.pathname.includes('/user') ||
    location.pathname.includes('/admin')
  ) {
    return null;
  }

  return <Footer />;
};

export default FooterWrapper;

