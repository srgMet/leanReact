import MyPosts from './MyPosts/MyPosts';
import s from'./Profile.module.css';

const Profile = () =>{
  return <div className={s.content}>
    <div>
      <img src="https://is.gd/uXnmyh" alt='pic' />
    </div>
    <div>
      ava+description
    </div>
    <MyPosts/>

  </div>
}

export default Profile