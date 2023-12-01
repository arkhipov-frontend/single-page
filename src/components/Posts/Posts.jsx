import PostSingle from './../PostSingle/PostSingle';
import styles from './posts.module.css'

const Posts = () => {
  return (
    <div className={styles.posts}>
        <PostSingle />
        <PostSingle />
        <PostSingle />
        <PostSingle />
        <PostSingle />
        <PostSingle />
        <PostSingle />
    </div>
  );
}

export default Posts;