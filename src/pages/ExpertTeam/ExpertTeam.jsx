// ExpertTeam.jsx
import React from "react";
import TeamMember from "./TeamMember"; // Create a separate component for each team member
import styles from "./ExpertTeam.module.css"; // Import your CSS styles

const ExpertTeam = () => {
  // Define your team members and their details
  const teamMembers = [
    {
      name: "Alice Johnson",
      position: "Lead Developer",
      expertise: "Full Stack Development",
      bio: "Passionate about creating innovative and efficient solutions for complex challenges. Enjoys working on both frontend and backend technologies.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Bob Smith",
      position: "UX/UI Designer",
      expertise: "User Experience Design",
      bio: "Dedicated to crafting visually stunning and user-friendly designs. Believes in the power of design to enhance user satisfaction and engagement.",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Eva Rodriguez",
      position: "Marketing Specialist",
      expertise: "Digital Marketing",
      bio: "Experienced in creating effective digital marketing strategies. Enjoys analyzing data to optimize campaigns and drive online success.",
      image: "https://randomuser.me/api/portraits/men/28.jpg",
    },
    {
      name: "David Lee",
      position: "Frontend Developer",
      expertise: "React.js, Vue.js",
      bio: "Passionate about creating responsive and interactive user interfaces. Constantly exploring new frontend technologies to stay at the forefront of web development.",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      name: "Sophia Miller",
      position: "Content Writer",
      expertise: "Content Creation",
      bio: "A wordsmith with a passion for storytelling. Specializes in creating compelling and engaging content that resonates with the target audience.",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Sophia Miller",
      position: "Content Writer",
      expertise: "Content Creation",
      bio: "A wordsmith with a passion for storytelling. Specializes in creating compelling and engaging content that resonates with the target audience.",
      image: "https://randomuser.me/api/portraits/women/15.jpg",
    },
  ];
//   console.log('%c Hello From Team', 'background: #222; color: #00ffff; font-size: 24px;');

  return (
    <div className={styles.expertTeam}>
      <h1>Meet Our Expert Team</h1>
      <div className={styles.teamMembers}>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default ExpertTeam;
