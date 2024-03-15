import React from "react";
import PropTypes from "prop-types";
import styles from "./Blogs.module.css";
import onErrorImage from "../../assets/images/OneErrorImage.png";

function BlogPost({ title, image, description, date }) {
  const handleImageError = (event) => {
    event.target.src = onErrorImage;
    event.target.alt = 'Default Poster'}

  return (
    <div className={styles.blog}>
      <div className={styles.blog_title}>{title}</div>
      <img src={image} loading="lazy" alt={title} onError={handleImageError} />
      <div
        className={styles.blog_content}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className={styles.blog_date}>{date}</div>
    </div>
  );
}

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default BlogPost;
