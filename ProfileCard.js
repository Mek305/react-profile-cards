import React from 'react';
import ProfileInfo from './ProfileInfo'


class ProfileCard extends React.Component{
  render(){
    return(
      <div className="id-card-wrapper">
        <div className="id-card">
          <ProfileInfo />
        </div>
      </div>
      )
  }
}

export default ProfileCard;