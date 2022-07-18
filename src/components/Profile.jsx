import s from'./Profile.module.css';

const Profile = () =>{
  return <div className={s.content}>
    <div>
      <img src="https://is.gd/uXnmyh" alt='pic' />
    </div>
    <div>
      ava+description
    </div>
    <div>
      My posts
      <div>
        New posts
      </div>
      <div className={s.posts}>
        <div className={s.item}>
          post1
        </div>
        <div className={s.item}>
          post2
        </div>

      </div>
    </div>

  </div>
}

export default Profile