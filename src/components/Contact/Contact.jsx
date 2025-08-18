import React from 'react';
import './contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Message sent!');
  };

  return (
    <section id="contact" className="section contact-section" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">Let's work together</h2>

        <div className="section-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Nescunt sit illo esse commodi.</p>
        </div>

        <div className="contact-grid">


          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="info-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="info-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="info-label">Your Message</label>
              <textarea
                id="message"
                name="message"
                className="message-area"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="send-button">
              Send message
            </button>
          </form>

          <div className="contact-info">
            <div className="info-block">
              <h3 className="info-label">Phone</h3>
              <p className="info-value">
                <a href="tel:+998947238850">+998-(94)-723-88-50</a>
              </p>
            </div>

            <div className="info-block">
              <h3 className="info-label">Email</h3>
              <p className="info-value">
                muxamadaliyevibrohim2009@gmail.com
              </p>
            </div>

            <div className="info-block">
              <h3 className="info-label">Address</h3>
              <p className="info-value">
                Toshkent, Samarqand
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;