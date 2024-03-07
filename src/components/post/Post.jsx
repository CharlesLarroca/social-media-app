import { MoreVert } from '@mui/icons-material'
import './post.css'
import { Users } from '../../dummyData'
import { useState } from 'react'

export default function Post({post}) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () => {
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className='postContainer'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={Users.filter(user=>user.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
            <span className="postUsername">{Users.filter(user=>user.id === post.userId)[0].username}</span>
            <span className="postDate">{post.Date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            {post?.desc}
          </span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='reactionIcon' src="/assets/like.png" onClick={likeHandler} alt="" />
            <img className='reactionIcon' src="/assets/heart.png" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comment</span>
          </div>
        </div>
      </div>
    </div>
  )
}
