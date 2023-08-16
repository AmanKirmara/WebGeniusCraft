// Button.jsx
import React from 'react';
import styles from './Button.module.css';
import LoadingCircle from '../../components/Loading/LoadingCircle';

const Button = ({ onClick, children }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
      <LoadingCircle display="none"/>
    </button>
  );
};

export default Button;
