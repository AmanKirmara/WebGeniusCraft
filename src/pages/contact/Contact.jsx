import React, { useState } from "react";
import styles from "./Contact.module.css";
import { FaEnvelope } from "react-icons/fa6";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // To track loading state
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // To disable button
const api = process.env.REACT_APP_BACKEND_ORIGIN;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Frontend validation for message length (e.g., max 500 characters)
    if (name === "message" && value.length > 500) {
      setErrorMessage("Message cannot exceed 500 characters");
      setIsButtonDisabled(true);
    } else {
      setErrorMessage("");
      setIsButtonDisabled(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, message } = formData;

    // Frontend validation (ensure form fields are not empty)
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      setErrorMessage("All fields are required.");
      return;
    }

    if (message.length > 500) {
      setErrorMessage("Message is too long (max 500 characters).");
      return;
    }

    setIsLoading(true); // Set loading state to true
    setIsButtonDisabled(true); // Disable the submit button

    try {
      const response = await axios.post(`${api}/api/v1/users/contact`, {
        name,
        email,
        message,
      });
      console.log("Server response:", response.data);

      if (response?.data?.success) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
      setErrorMessage(""); // Clear error message
    } catch (error) {
      console.error("Error sending message:", error);
      setSuccessMessage("")

      if (error.response && error.response.status === 429) {
        setErrorMessage(
          "You have reached the daily limit of 2 messages. Please try again tomorrow."
        );
      } else if (
        error.response &&
        error.response.data &&
        error.response.data.error
      ) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage(
          "There was an issue sending your message. Please try again."
        );
      }
    } finally {
      setIsLoading(false); // Reset loading state
      setIsButtonDisabled(false); // Re-enable the submit button
    }
  };

  return (
    <div className={`${styles.contact_container} d-flex j-c-c align-i-e`}>
      <FaEnvelope className={styles.iconStyle} />
      <form
        className={styles.contact_form}
        id="contactForm"
        onSubmit={handleSubmit}
      >
        {successMessage && (
          <div className={styles.success}>{successMessage}</div>
        )}
        {errorMessage && <div className={styles.error}>{errorMessage}</div>}
        
        <div>
          <label htmlFor="name">Name:</label>
          <div className={styles.input_wrapper}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="off"
              maxLength="30"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email">Email:</label>
          <div className={styles.input_wrapper}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
              maxLength="50"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="message">Message:</label>
          <div className={styles.input_wrapper}>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message (Max 500 characters)"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              maxLength="500"
              required
            ></textarea>
          </div>
        </div>
        
        <button
          type="submit"
          className={styles.btn}
          disabled={isButtonDisabled || isLoading} // Disable button if validation fails or during loading
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
