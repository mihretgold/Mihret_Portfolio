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
         // Clear the error message after 5 seconds
         setTimeout(() => {
           setErrorMessage("");
            setSuccessMessage("");
         }, 5000);
       }
     );
  };

  return (
    <div>
      <TitleDesc
        title="Contact Me"
        description="Please fill out the form below to discuss any work opportunities."
      />
      <div className="contact-info">
        <div className="contact-detail">
          <a
            href="https://github.com/mihretgold"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mihret-bekele/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:mihretagegnehu2@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          {/* Add more contact info here if needed */}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="input-field"
        />
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
          className="input-field"
        />
        <br />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
          className="text-area"
        />
        <br />
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default ContactMe;
