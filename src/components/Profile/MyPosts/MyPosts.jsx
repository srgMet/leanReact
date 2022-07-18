import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return <div>
    My posts
    <div>
      <textarea></textarea>
      <button>Add post</button>
    </div>
    <div className={s.posts}>
      <Post message='Hi, how are you?' LikesCounts='23' />
      <Post message="It's my first post" LikesCounts='10' />
    </div>
  </div>
}

export default MyPosts