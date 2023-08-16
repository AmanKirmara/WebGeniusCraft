
import styles from "./LoadingCircle.module.css";
function LoadingCircle(props){
    return(
        <>
            <div className={styles.buttonRing} style={{display: props.display}}>
                <div className={styles.innerRing}></div>
            </div>
        </>
    );
}

export default LoadingCircle;