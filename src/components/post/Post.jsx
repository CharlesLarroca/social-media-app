import { MoreVert } from '@mui/icons-material'
import './post.css'

export default function Post() {
  return (
    <div className='postContainer'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
            <span className="postUsername">Charles Larroca</span>
            <span className="postDate">2 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            Hey its the first post
          </span>
          <img src="/assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='reactionIcon' src="/assets/like.png" alt="" />
            <img className='reactionIcon' src="/assets/heart.png" alt="" />
            <span className="postLikeCounter">1 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">1 comment</span>
          </div>
        </div>
      </div>
    </div>
  )
}
