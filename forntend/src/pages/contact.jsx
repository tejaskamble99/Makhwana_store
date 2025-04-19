import React from 'react';
import '../styles/contact.css'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div>
      <section id="page-header" className="contact-header">
        <h2>Get in Touch</h2>
        <p>We would love to hear from you. Send us a message!</p>
      </section>

      <section id="contact-details" className="section-p1">
        <div className="details">
          <h2>Contact Information</h2>
          <p>Feel free to reach out to us using the details below.</p>
          <ul>
            <li><i className='bx bx-map'></i> Borivali Magathane Depot, Mumbai, India</li>
            <li><i className='bx bx-phone'></i> +91 9152100750</li>
            <li><i className='bx bx-envelope'></i> <a href="mailto:info@makwanastore.com">info@makwanastore.com</a></li>
            <li><i className='bx bxl-instagram'></i> <a href="https://www.instagram.com/makwanastore.com_fashion?igsh=ZjN3cm1rZzdpcW4z">@makwanastore</a></li>
          </ul>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7895882972945!2d72.84794061421588!3d19.2118820518708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7694f7d4e21%3A0x861bd90f5b46d3b4!2sBorivali%20Magathane%20Depot!5e0!3m2!1sen!2sin!4v1692025167314!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section id="contact-form" className="section-p1">
        <h2>Send Us a Message</h2>
        <form id="contactForm" onSubmit={handleSubmit}>
          <input type="text" id="name" placeholder="Your Name" required />
          <input type="email" id="email" placeholder="Your Email" required />
          <input type="text" id="subject" placeholder="Subject" />
          <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="normal">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
