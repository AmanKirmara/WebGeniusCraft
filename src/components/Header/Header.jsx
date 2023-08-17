import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.css';
import logoImage from '../../assets/images/webgeniuslogo.png';
/* logo created by :: https://express.adobe.com/sp , background-color: transparent */
// import Notifications from '../Notifications/Notifications';

const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setIsHeaderFixed(true);
    } else {
      setIsHeaderFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handelLogo = () => {
    window.location.href = '/';
  };
  

  return (
    <header className={`${styles.header} ${isHeaderFixed ? styles.fixed : ''}`}>
     <img
  className={styles.logo}
  src={logoImage}
  onClick={handelLogo}
  onContextMenu={(e)=>{e.preventDefault()}} 
  alt="My Logo"
/>

      <Navbar width="40%" />
      {/* <Notifications /> */}
    </header>
  );
};

export default Header;
