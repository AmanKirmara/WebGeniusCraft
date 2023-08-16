
import styles from "./Service.module.css";
function Service() {
    return (
        <>
        <div className={styles.container_warp}>
            <div className={styles.container}>
                <h2>Services Offered</h2>
                <section className={styles.text_cover}>
                    <ul className={styles.servieces_left}>
                        <li>
                            <h3>
                                Custom Website Design
                            </h3>
                            <p>
                                Creation of visually stunning and user-friendly website
                                designs.
                            </p>
                        </li>
                        <li>
                            <h3>
                                Front-End Development
                            </h3>
                            <p>
                                Expertise in HTML5, CSS3, and JavaScript for building
                                interactive web experiences.
                            </p>
                        </li>
                        <li>
                            <h3>
                                Responsive Web Development
                            </h3>
                            <p>
                                Building websites that adapt and scale smoothly across various
                                screen sizes.
                            </p>
                        </li>
                        <li>
                            <h3>
                                Cross-Browser Compatibility
                            </h3>
                            <p>
                                Ensuring website functionality and design consistency across
                                different web browsers.
                            </p>
                        </li>
                        <li>
                            <h3>
                                Website Optimization
                            </h3>
                            <p>
                                Enhancing website performance by minimizing file sizes and
                                optimizing code.
                            </p>
                        </li>
                    </ul>
                    <ul className={styles.services_right}>
                        <li>
                            <h3>
                                Custom Web Application Development
                            </h3>
                            <p>
                                Building dynamic and interactive web applications tailored to
                                meet your specific business needs.
                            </p>
                        </li>
                        <li>
                            <h3>
                                Database Integration
                            </h3>
                            <p>
                                Designing and integrating databases to store and manage data
                                effectively, ensuring seamless functionality for your web
                                applications.
                            </p>
                        </li>
                        <li>
                            <h3>
                                API Development and Integration
                            </h3>
                            <p>
                                Creating robust APIs (Application Programming Interfaces) and
                                integrating them into your web applications for seamless data
                                exchange and integration with external services.
                            </p>
                        </li>
                        <li>
                            <h3>
                                Website Maintenance and Support
                            </h3>
                            <p>
                                Providing ongoing maintenance and support services to ensure
                                your website remains up-to-date, secure, and optimized for
                                performance.
                            </p>
                        </li>
                    </ul>
                </section>
            </div>
            </div>
        </>
    );
}
export default Service;