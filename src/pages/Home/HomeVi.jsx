import React from "react";
import styles from "./HomeVi.module.css";
import videoSource from "../../assets/videos/videobackground.mp4";
import Button from "../../components/Button/Button";
function HomeVi() {
  return (
    <div className={styles.container}>
      <video autoPlay loop muted className={styles.videoBackground}>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
     
      <Button>click</Button>
    </div>
  );
}

export default HomeVi;
