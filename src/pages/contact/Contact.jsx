import React from "react";
import styles from "./Contact.module.css";
import { FaEnvelope } from "react-icons/fa6";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const id = formData.get("email");
    const msg = formData.get("message");
    console.log("Name:", name);
    console.log("ID:", id);
    console.log("Message:", msg);
    // Do something with the form data, like submitting to a server or updating state
  };

  return (
    <>
    <div className={`${styles.contact_container} d-flex j-c-c align-i-e `}>
    <FaEnvelope className={styles.iconStyle} />
      <form
        method="post"
        className={styles.contact_form}
        id="contactForm"
        action="/contact"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name">Name:</label>
          <div className={styles.input_wrapper}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            autoComplete="no"
            translate="no"
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
            autoComplete="off"
            placeholder="Your Email"
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
            placeholder="Your Message"
            rows="4"
            required
          ></textarea>
          </div>
        </div>
        <button  type="submit" className={styles.btn}>
          Send Message
        </button>
      </form>
    </div>
    </>
  );
}

export default Contact;
