import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import OurPolicy from './OurPolicy';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.firstname.trim()) newErrors.firstname = "First name is required.";
    if (!formData.lastname.trim()) newErrors.lastname = "Last name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Please enter your message.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      console.log('Form submitted:', formData);
      setFormData({ firstname: '', lastname: '', email: '', message: '' });
    }
  };

  return (
    <>
    <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* LEFT SIDE */}
      <div>
        <h2 className="text-6xl font-semibold mt-20 mb-8 tracking-widest text-black">Get in Touch</h2>
        <div className="flex space-x-6 mt-4">
          <a href="#" className="text-[rgb(204,192,153)] text-2xl hover:scale-110 transition"><FaFacebookF /></a>
          <a href="#" className="text-[rgb(204,192,153)] text-2xl hover:scale-110 transition"><FaInstagram /></a>
          <a href="#" className="text-[rgb(204,192,153)] text-2xl hover:scale-110 transition"><FaTwitter /></a>
          <a href="#" className="text-[rgb(204,192,153)] text-2xl hover:scale-110 transition"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* RIGHT SIDE - FORM */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-bold">First Name *</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-[rgb(204,192,153)]"
            />
            {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>}
          </div>
          <div>
            <label className="block mb-1 font-bold">Last Name *</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-[rgb(204,192,153)]"
            />
            {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>}
          </div>
        </div>
        <div>
          <label className="block mb-1 font-bold">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-[rgb(204,192,153)]"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block mb-1 font-bold">Your Message for Us *</label>
          <textareaMessage
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-[rgb(204,192,153)]"
          ></textareaMessage>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-white border-2 border-[rgb(204,192,153)] hover:bg-[rgb(204,192,153)] hover:text-black text-[rgb(204,192,153)] font-semibold py-3 rounded-md transition uppercase tracking-widest"
          >
            Send Message
          </button>
        </div>
        {submitted && (
          <p className="text-green-600 text-center font-medium mt-4">
            Thank you! We'll be in touch soon.
          </p>
        )}
      </form>
    </div>
    <OurPolicy />
    </>
  );
};

export default ContactForm;
