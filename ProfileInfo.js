import React from 'react';
import Squad from './squad.js'
class ProfileInfo extends React.Component{
  render(){
    return(
      <div className="profile-row">
        <div className="dp" id="dp">
          <div className="dp-arc-outer"></div>
          <div className="dp-arc-inner"></div>
          <img
            src="https://static.vibe.com/files/article_images/kanye-album-cover-mbdtf-compressed.png"
            alt="Kanye"
          />
        </div>
        <div className="desc" id="desc">
          <h1>Miles King</h1>
          <p>Age: 25</p>
          <p>Eye Color: Hazel</p>
        </div>
      </div>
    )
  }
}

export default ProfileInfo;