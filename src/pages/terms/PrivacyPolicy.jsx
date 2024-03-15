// PrivacyPolicy.jsx
import React from "react";
import styles from "./PrivacyPolicy.module.css"; 

const PrivacyPolicy = () => {
  return (
    <div className={styles.container_warp}>
    <div className={styles.container}>
      <h1>Privacy Policy</h1>
      <p>Last updated: 12-1-2023</p>

      <section>
        <h2>Introduction</h2>
        <p>
          Welcome to WebGeniusCraft. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you visit
          our website or use our services.
        </p>
        <p>
          By using our website, you consent to the practices described in this
          Privacy Policy.
        </p>
      </section>

      {/* Add other sections as needed */}

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at <a href="mailto:amankirmara143@email.com" className={styles.contact_link}>amankirmara143@email.com</a>.
        </p>
      </section>
    </div>
    </div>
  );
};

export default PrivacyPolicy;
