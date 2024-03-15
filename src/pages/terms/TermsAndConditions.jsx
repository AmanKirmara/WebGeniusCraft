import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./TermsAndConditions.module.css";

function TermsAndConditions() {
  return (
    <>
      <div className={styles.container_warp}>
        <div className={styles.container}>
          <h2>Terms and Conditions</h2>

          <section className={styles.terms}>
            <div className={styles.terms_content}>
              <p>
                By accessing and using this website, you agree to the following
                terms and conditions:
              </p>
              <ol>
                <li>
                  This website and its content are the property of <b style={{ color: "gold" }}>WebGeniusCraft</b>. Unauthorized use of the content may violate copyright,
                  trademark, and other laws.
                </li>
                <li>
                  You may not modify, reproduce, or distribute the content
                  without explicit permission from <b style={{ color: "gold" }}>WebGeniusCraft</b>.
                </li>
                <li>
                  The information provided on this website is for general
                  informational purposes only. It is not intended as legal,
                  financial, or professional advice.
                </li>
                <li>
                  As a Node.js, Express, and MongoDB backend developer, I
                  provide services including but not limited to:
                  <ul>
                    <li>Custom Website Design and Development.</li>
                    <li>
                      Front-End Development using HTML5, CSS3, and JavaScript,
                      with expertise in Tailwind CSS and Bootstrap.
                    </li>
                    <li>
                      Responsive Web Development, ensuring websites adapt
                      smoothly across various screen sizes.
                    </li>
                    <li>
                      Node.js & Express Backend Development for server-side
                      scripting and API development.
                    </li>
                    <li>
                      MongoDB (Mongoose) Database Integration, designing and
                      integrating databases to store and manage data
                      effectively.
                    </li>
                    <li>
                      Web Application Development, building dynamic and
                      interactive applications.
                    </li>
                    <li>
                      API Development and Integration, creating robust APIs and
                      integrating them into web applications.
                    </li>
                    <li>
                      Website Maintenance and Support, providing ongoing support
                      to ensure websites remain up-to-date, secure, and
                      optimized.
                    </li>
                  </ul>
                </li>
                <li>
                  <b style={{ color: "gold" }}>WebGeniusCraft</b> reserves the
                  right to modify or update these terms and conditions at any
                  time. It is your responsibility to check for updates
                  periodically.
                </li>
              </ol>
              <p>
                If you have any questions about these terms, please{" "}
                <NavLink to="/contact" className={styles.contact_link}>
                  contact us
                </NavLink>
                .
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default TermsAndConditions;
