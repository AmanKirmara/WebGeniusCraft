// import landingImg from "../../assets/images/landingpageimg.png";
// import landingImg from "../Images/landingpageimg.png";
import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";
import TypewriterAnimation from "../../components/TypewriterAnimation";

function Home() {
  const textArray = ["Web Developer", "Graphics Designer", "Web Designer"];
  const speed = 200;
  const typewriterColor = "aqua";

  return (
    <>
      <div className={`${styles.homecontainer} d-flex f-r j-c-s-a `}>
        <div className={styles.left_section}>
          <h1>WebGeniusCraft</h1>
          <p>
            Hi my name is <span className={styles.namecolor}>Aman</span>
            <div>and I am passionate</div>
            <span id="element"><TypewriterAnimation textArray={textArray} speed={speed} color={typewriterColor}/>.</span>
          </p>
          <NavLink to="/contact">Contact Us</NavLink>
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
      <div className="container d-flex"></div>
    </>
  );
}

export default Home;





