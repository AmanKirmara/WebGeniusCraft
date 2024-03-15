// TeamMember.jsx
import React from "react";
import styles from "./TeamMember.module.css"; // Import your CSS styles

const TeamMember = ({ name, position, expertise, bio, image }) => {
  return (
    <div className={styles.teamMember}>
      <img src={`${image}`} alt={name} />
      {/* <img src={`/images/team/${image}`} alt={name} /> */}
      {/* <img src={`https://cdn.vectorstock.com/i/preview-1x/17/61/male-avatar-profile-picture-vector-10211761.jpg`} alt={name} /> */}
      <div className={styles.memberDetails}>
        <h2>{name}</h2>
        <p>{position}</p>
        <p>{expertise}</p>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;
