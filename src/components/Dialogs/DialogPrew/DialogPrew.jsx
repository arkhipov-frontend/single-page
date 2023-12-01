import { NavLink } from 'react-router-dom';
import styles from './dialogSingle.module.css';


const DialogPrew = (props) => {
  return(
    <NavLink to={props.dialogPath} className={styles.dialogSingle}>
      <div className={styles.userInfo}>
        <img className={styles.userPhoto} src={props.userPhoto} />
        <div className={styles.userName}>{props.userName}</div>
      </div>
      <div className={styles.lastMessage}>{props.lastMessage}</div>
    </NavLink>
  );
}

export default DialogPrew;