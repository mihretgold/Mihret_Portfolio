import React, { useState } from "react";
import TitleDesc from "../TitleDesc/titleDesc";
import emailjs from "emailjs-com";
import './contactMe.css'

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

   emailjs
     .sendForm(
       process.env.REACT_APP_EMAILJS_SERVICE_ID,
       process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
       e.target,
       process.env.REACT_APP_EMAILJS_USER_ID
     )
     .then(
       (result) => {
         setSuccessMessage("Your message has been sent successfully!");
         setErrorMessage("");
         setFormData({ name: "", email: "", message: "" });
         setIsSubmitting(false);
       },
       (error) => {
         setErrorMessage(
           "There was an error sending your message. Please try again later."
         );
         setSuccessMessage("");
         setIsSubmitting(false);
         setTimeout(() => {
           setErrorMessage("");
           setSuccessMessage("");
         }, 5000);
       }
     );
  };

  const contactLinks = [
    {
      name: "GitHub",
      url: "https://github.com/mihretgold",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mihret-bekele/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "Email",
      url: "mailto:mihretagegnehu2@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )
    }
  ];

  const contactInfo = [
    { label: "Email", value: "mihretagegnehu2@gmail.com" },
    { label: "Phone", value: "+251 974 437 198" },
    { label: "Location", value: "Addis Ababa, Ethiopia" }
  ];

  return (
    <div className="contact-section">
      <TitleDesc
        title="Get in Touch"
        description="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!"
      />
      
      <div className="contact-content">
        <div className="contact-info-panel">
          <h3 className="contact-panel-title">Contact Information</h3>
          
          <div className="contact-info-list">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-item">
                <span className="contact-info-label">{info.label}</span>
                <span className="contact-info-value">{info.value}</span>
              </div>
            ))}
          </div>
          
          <div className="social-links">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="availability-badge">
            <span className="availability-dot"></span>
            Available for opportunities
          </div>
        </div>
        
        <div className="contact-form-panel">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="form-textarea"
                required
              />
            </div>
            
            <button type="submit" className="form-submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="submit-spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22,2 15,22 11,13 2,9"/>
                  </svg>
                  Send Message
                </>
              )}
            </button>
          </form>
          
          {successMessage && (
            <div className="form-message success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22,4 12,14.01 9,11.01"/>
              </svg>
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="form-message error">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="15" y1="9" x2="9" y2="15"/>
                <line x1="9" y1="9" x2="15" y2="15"/>
              </svg>
              {errorMessage}
            </div>
          )}
        </div>
      </div>
      
      <div className="footer">
        <p>© 2025 Mihret Agegnehu. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ContactMe;
