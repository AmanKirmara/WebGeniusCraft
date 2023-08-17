import {
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaWhatsapp,
  FaRegEnvelope,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaRegEnvelopeOpen,
} from "react-icons/fa";

import footerLogo from "../../assets/images/webgeniuslogo.png";
import { Link } from "react-router-dom";
import React from "react";
import styles from "./Footer.module.css";
import GoogleMap from "../GoogleMap/GoogleMap";
function Footer() {
  const handleScrollZero =()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
  return (
    <>
      <footer>
        <div className={styles.toprow}>

          <div className={styles.left}>
            <FaMapMarkerAlt className={styles.location} />
            <div className={styles.warp}>
              <h2>Find Us</h2>
              <Link to="/">Hisar Haryana India</Link>
            </div>
          </div>
          <div className={`${styles.center} ${styles.left}`}>
            <FaPhone className={styles.location} />
            <div className={styles.warp}>
              <h2>Call Us</h2>
              <Link to="tel:7497052603">+91 (74970)52603</Link>
            </div>

          </div>
          <div className={`${styles.right} ${styles.left}`}>
            <FaRegEnvelopeOpen className={styles.location} />
            <div className={styles.warp}>
              <h2>Mail Us</h2>
              <Link to="mailto:amankirmara143@gmail.com">amankirmara143@gmail.com</Link>
            </div>

          </div>
        </div>
        <hr />
        <div className={styles.centerrow}>
          <div className={styles.leftftr}>
            <div className={styles.footerLogo}>
              <img src={footerLogo} alt="" />
            </div>
            <p>Thanks for visiting! I'm a web developer and designer, passionate
              about creating visually appealing and user-friendly websites. Let's
              connect and discuss your project!</p>
            <div className={styles.social}>
              <a href="https://www.instagram.com/theaman.j" target="_blank" rel="noopener noreferrer" >
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/Amankirmara01" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://github.com/AmanKirmara" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://wa.me/917497052603" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
              <a href="mailto: amankirmara143@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaRegEnvelope />
              </a>
            </div>
          </div>
          <div className={styles.centerftr}>
            <h2>Useful Links</h2>
            <ul>
              <li><Link to="/" onClick={handleScrollZero}>Home</Link></li>
              <li><Link to="/about/" onClick={handleScrollZero}>About Us</Link></li>
              <li><Link to="/service" onClick={handleScrollZero}>Services</Link></li>
              <li><Link to="/contact" onClick={handleScrollZero}>Contact us</Link></li>
              <li><Link to="/terms" onClick={handleScrollZero}>Terms and-Conditions</Link></li>
            </ul>
            <ul>
              <li><Link to="/">Portfolio</Link></li>
              <li><Link to="/">Expert Team</Link></li>
              <li><Link to="/">Latest News</Link></li>
              <li><Link to="/">Privacy Policy</Link></li>
              <li><Link to="/">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className={styles.rightftr}>
            <div className={styles.find_us}>
              <h2> Find US on Map </h2>
              {/* <FaMapMarkerAlt /> */}
              <GoogleMap ht="200px" op={0.7} br="3px" />
            </div>
            <div className={styles.footercontact}>
              <input type="text" name="footerinput" placeholder="Enter your email add." title="" autoComplete="off" translate="no" maxLength={50} required />
              <button><FaPaperPlane className={styles.footerinpbtn} /></button>
            </div>
          </div>
        </div>
        <hr />
        <p className={styles.copyright_text}>
          &copy;webfirst 2021 - {new Date().getFullYear()} | All rights reserved
        </p>
      </footer>
    </>
  );
}

export default Footer;
