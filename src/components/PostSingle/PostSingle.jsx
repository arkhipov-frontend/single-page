import styles from './postSingle.module.css';
import personLogo from './img/person.svg'

import { NavLink } from 'react-router-dom';


const PostSingle = () => {
  return (
    <div className='container'>
      <div className={styles.postSingle}>
        <div className={styles.imgWrapper}>
          <img className={styles.userPhoto} src={personLogo} />
          <div className={styles.userName}>Kill'ka</div>
        </div>
        <div className={styles.postInfo}>
          post info <br />
          date
        </div>
        <div className={styles.postText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quas libero dolore!</div>
      </div>
    </div>
  );
}

export default PostSingle;