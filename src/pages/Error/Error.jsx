import { useEffect,useState } from "react";
import styles from "./Error.module.css";
function Error() {
    const [secondsLeft,setSeccondsLeft] = useState(5);
    useEffect(()=>{
        const interval = setInterval(() => {
            setSeccondsLeft((prevSec)=>prevSec -1);
        }, 1000);
        if(secondsLeft === 0){
            clearInterval(interval);
            window.location.href = '/';
        }
        return() => clearInterval(interval)
    },[secondsLeft])
  return (
    <>
    <div className={styles.notificationErr}>Redirecting to Home...</div>
      <div className={styles.error_container}>
        <div className={styles.error_content}>
          <h1 className={styles.error_title}>Oops! Page Not Found</h1>
          <p className={styles.error_text}>
            It looks like you took a wrong turn.
          </p>
        
          <a className={styles.error_link} id="redirectMsgBtn" href="/">
            Go back to Home <span>{secondsLeft}</span>
          </a>
        </div>
      </div>
    </>
  );
}
export default Error;
