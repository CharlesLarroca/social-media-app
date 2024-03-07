import './profile.css'

import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profileContainer">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src="/assets/post/3.jpeg" alt="" className="profileCoverImg" />
              <img src="/assets/person/1.jpeg" alt="" className="profileUserImg" />              
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Charles Larroca</h4>
              <h4 className="profileInfoDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit expedita quis eveniet eum?</h4>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  )
}
