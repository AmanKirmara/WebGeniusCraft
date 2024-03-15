// NewsArticle.jsx
import React from "react";
import styles from "./NewsArticle.module.css"; // Import your CSS styles

const NewsArticle = ({ title, date, content }) => {
  return (
    <div className={styles.newsArticle}>
      <h3>{title}</h3>
      <p className={styles.date}>{date}</p>
      <p>{content}</p>
    </div>
  );
};

export default NewsArticle;
