import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar({profile}){

  const HomeRightBar = () => {
    return(
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 others friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendsList">
          {Users.map(user=>(
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightBar = () => {
    return(
      <>
        <h4 className='rightbarTitle'>User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Suzano</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">São Paulo</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Engaged</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    )
  }

  return(
    <div className='rightbar'>
      <div className="rightbarWrapper">
      {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  )
}