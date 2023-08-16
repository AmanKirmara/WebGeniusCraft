
import React from "react";
import { NavLink } from "react-router-dom";
import myimg from "../../assets/images/profile.png";
import styles from "./About.module.css";

function About(){
    return(
        <>
        <div className={styles.container_warp}>
        <div className={styles.container}>
          <h2>About</h2>
          <section className={styles.about}>
            <div className={styles.about_image}>
              <img src={myimg} alt="Profile" />
            </div>
            <div className={styles.about_content}>
              <p>
                I am a passionate and dedicated frontend web developer with a
                strong focus on creating visually appealing and user-friendly
                websites. With expertise in HTML, CSS, and JavaScript, I strive to
                deliver high-quality code and exceptional user experiences.
              </p>
              <p>
                My goal is to bring ideas to life through clean and efficient
                code, paying attention to every detail of the design and
                functionality. I enjoy working collaboratively and am always eager
                to learn and explore new technologies in the ever-evolving world
                of web development.
              </p>
              <NavLink to="/contact" className={styles.btn}>
                Contact Me
              </NavLink>
            </div>
          </section>
        </div>
        </div>
      </>
    )
    
}
export default About;