import React from "react";
import PropTypes from "prop-types";
import styles from "./Blogs.module.css";

function BlogPost({ title, image, content, date }) {
  return (
    <div className={styles.blog}>
      <div className={styles.blog_title}>{title}</div>
      <img src={image} alt={title} />
      <div className={styles.blog_content}>
        {content.map((paragraph, index) => (
          <p key={index}>
            {paragraph.split(":").length > 1 ? ( // Check if ":" is present in the paragraph
              <span>
                <strong style={{ color: "gold" }}>
                  {paragraph.split(":")[0]}:{" "}
                </strong>
                {paragraph.split(":")[1]}
              </span>
            ) : (
              paragraph
            )}
          </p>
        ))}
      </div>
      <div className={styles.blog_date}>{date}</div>
    </div>
  );
}

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
};

export default BlogPost;
