import s from './Post.module.css';

const Post = (props) => {
  return <div className={s.item}>
    <img src="http://surl.li/cltzp" alt="" />
    { props.message }
    <div>
      <span>Like</span>
    </div>
  </div>

}

export default Post