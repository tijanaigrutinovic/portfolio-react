import React, { useState } from 'react';
import emailjs from 'emailjs-com'; 
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eylw2do', 'template_cn3c0xn', e.target, 'mtUZ3GM2_Mojd-7vU')
      .then((result) => {
        alert('Your message is sent! Thank you!');
        setFormData({ name: '', email: '', message: '' }); 
      }, (error) => {
        alert('An error occurred: ' + error.text);
      });
  };

  return (
    <div className="experience section" id="contact">
      <div className="experience-left">
        <h2>// Contact</h2>
        <p style={{ marginBottom: '40px' }}>
          Let's build something beautiful together!
        </p>
      </div>
      <div className="experience-right">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              className="name"
              name="name"
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Your Name</label>
          </div>
          <div className="input-container">
            <input
              type="email"
              className="email"
              name="email"
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-container">
            <textarea
              className="message"
              name="message"
              placeholder=" "
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <button type="submit" className="contact-button">
            <span>
              Send <i className="fa-regular fa-paper-plane"></i>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
