
import styles from "./LoadingRing.module.css";
function LoadingRing() {
  return (
    <>
      <div className={styles.animCover}>
            <div className={styles.warp}>
                <span>W</span>
            </div>
      </div>
    </>
  );
}
export default LoadingRing;
