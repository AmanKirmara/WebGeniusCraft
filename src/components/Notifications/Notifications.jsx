

import { FaBell } from "react-icons/fa6";
import styles from "./Notifications.module.css";
function Notifications() {
    return (
        <>
        <div className={styles.warp}>
        <FaBell className={styles.notification_icon}/>
        </div>
        </>
    );
}
export default Notifications;