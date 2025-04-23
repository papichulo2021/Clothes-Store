import React from 'react';
import ContactForm from '../components/ContactForm';
import StoreMap from '../components/StoreMap';
import ContactHeader from '../components/ContactHeader';
const ContactPage = () => {
  return (
    <div>
      <ContactHeader />
      <StoreMap />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
