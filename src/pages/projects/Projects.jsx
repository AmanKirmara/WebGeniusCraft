// Projects.jsx
import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

function Projects() {

    
  // Sample projects data
  const projects = [
    {
      title: "Project 1",
      description: "Description for Project 1Description for Project 1. lorem dolor lore mauris vel lore mDescription for Project 1. lorem dolor lore mauris vel lore mDescription for Project 1. lorem dolor lore mauris vel lore mDescription for Project 1. lorem dolor lore mauris vel lore mDescription for Project 1. lorem dolor lore mauris vel lore m. lorem dolor lore mauris vel lore m",
      image:
        "https://res.cloudinary.com/amanjanagal/image/upload/v1710005718/mqtofui5wiffs8iws0lf.jpg",
      link: "http://localhost:3000/projects",
    },
    {
      title: "Project 1",
      description: "Description for Project 1.",
      image:
        "https://res.cloudinary.com/amanjanagal/image/upload/v1710005718/mqtofui5wiffs8iws0lf.jpg",
      link: "http://localhost:3000/projects",
    },
    {
      title: "Project 1",
      description: "Description for Project 1.",
      image:
        "https://res.cloudinary.com/amanjanagal/image/upload/v1710005718/mqtofui5wiffs8iws0lf.jpg",
      link: "http://localhost:3000/projects",
    },
    {
      title: "Project 1",
      description: "Description for Project 1.",
      image:
        "https://res.cloudinary.com/amanjanagal/image/upload/v1710005718/mqtofui5wiffs8iws0lf.jpg",
      link: "http://localhost:3000/projects",
    },
    {
      title: "Project 1",
      description: "Description for Project 1.",
      image:
        "https://res.cloudinary.com/amanjanagal/image/upload/v1710005718/mqtofui5wiffs8iws0lf.jpg",
      link: "http://localhost:3000/projects",
    },
    {
      title: "Project 1",
      description: "Description for Project 1.",
      image:
        "https://res.cloudinary.com/amanjanagal/image/upload/v1710005718/mqtofui5wiffs8iws0lf.jpg",
      link: "http://localhost:3000/projects",
    },
    {
      title: "Project 1",
      description: "Description for Project 1.",
      image:
        "https://res.cloudinary.com/amanjanagal/image/upload/v1710005718/mqtofui5wiffs8iws0lf.jpg",
      link: "http://localhost:3000/projects",
    },
    {
      title: "Project 1",
      description: "Description for Project 1.",
      image:
        "https://res.cloudinary.com/amanjanagal/image/upload/v1710005718/mqtofui5wiffs8iws0lf.jpg",
      link: "http://localhost:3000/projects",
    },
    {
      title: "Project 1",
      description: "Description for Project 1.",
      image:
        "https://res.cloudinary.com/amanjanagal/image/upload/v1710005718/mqtofui5wiffs8iws0lf.jpg",
      link: "http://localhost:3000/projects",
    },
    {
      title: "Project 1",
      description: "Description for Project 1.",
      image:
        "https://res.cloudinary.com/amanjanagal/image/upload/v1710005718/mqtofui5wiffs8iws0lf.jpg",
      link: "http://localhost:3000/projects",
    },
    {
      title: "Project 1",
      description: "Description for Project 1.",
      image:
        "https://res.cloudinary.com/amanjanagal/image/upload/v1710005718/mqtofui5wiffs8iws0lf.jpg",
      link: "http://localhost:3000/projects",
    },
    {
      title: "Project 1",
      description: "Description for Project 1.",
      image:
        "https://res.cloudinary.com/amanjanagal/image/upload/v1710005718/mqtofui5wiffs8iws0lf.jpg",
      link: "http://localhost:3000/projects",
    },
    {
      title: "Project 1",
      description: "Description for Project 1.",
      image:
        "https://res.cloudinary.com/amanjanagal/image/upload/v1710005718/mqtofui5wiffs8iws0lf.jpg",
      link: "http://localhost:3000/projects",
    },
    {
      title: "Project 1",
      description: "Description for Project 1.",
      image:
        "https://res.cloudinary.com/amanjanagal/image/upload/v1710005718/mqtofui5wiffs8iws0lf.jpg",
      link: "http://localhost:3000/projects",
    },
    {
      title: "Project 1",
      description: "Description for Project 1.",
      image:
        "https://res.cloudinary.com/amanjanagal/image/upload/v1710005718/mqtofui5wiffs8iws0lf.jpg",
      link: "http://localhost:3000/projects",
    },
    {
      title: "Project 1",
      description: "Description for Project 1.",
      image:
        "https://res.cloudinary.com/amanjanagal/image/upload/v1710005718/mqtofui5wiffs8iws0lf.jpg",
      link: "http://localhost:3000/projects",
    },
    {
      title: "Project 1",
      description: "Description for Project 1.",
      image:
        "https://res.cloudinary.com/amanjanagal/image/upload/v1710005718/mqtofui5wiffs8iws0lf.jpg",
      link: "http://localhost:3000/projects",
    },
    // Add more projects as needed
  ];

  return (
    <div className={styles.container}>

      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}

export default Projects;
