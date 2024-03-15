// ProjectCard.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";

function ProjectCard({ title, description, image, link }) {
  return (
    <div className={styles.projectCard}>
      <img src={image} alt={title} className={styles.projectImage} />
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <a href={link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
        Learn More
      </a>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
