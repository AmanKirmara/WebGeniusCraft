import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";
import TypewriterAnimation from "../../components/TypewriterAnimation";
import videoSource from "../../assets/videos/videobackground.mp4";

function Home() {
  const [shouldAutoPlay, setShouldAutoPlay] = useState(false);

  window.addEventListener('load',()=>{
    setShouldAutoPlay(true)
  })
  const textArray = ["Web Developer", "Graphics Designer", "Web Designer"];
  const speed = 200;
  const typewriterColor = "aqua";

  useEffect(() => {
      const timeoutId = setTimeout(() => {
        setShouldAutoPlay(false);
      }, 6000);

      return () => {
        clearTimeout(timeoutId);
      };
  }, []);

  const handleVideoEnd = () => {};

  return (
    <>
      <div className={`${styles.homecontainer} d-flex f-r j-c-s-a `}>
        {shouldAutoPlay && (
          <video
            autoPlay={shouldAutoPlay}
            loop
            muted
            className={styles.videoBackground}
            onEnded={handleVideoEnd}
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        <div className={styles.left_section}>
          <h1>WebGeniusCraft</h1>
          <p>
            Hi my name is <span className={styles.namecolor}>Aman<br /></span>{" "}
            and I am passionate{" "}
            <span id="element">
              <TypewriterAnimation
                textArray={textArray}
                speed={speed}
                color={typewriterColor}
              />
            </span>
          </p>

          <NavLink to="/contact" className={styles.contactButton}>Contact Us</NavLink>
        </div>
        <div className={styles.right_section}>
          <lottie-player
            className="laptop-anim"
            src="https://lottie.host/c763dffd-e737-4d5c-8a45-51dd2bd72560/b2XTYKQGZF.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </>
  );
}

export default Home;
