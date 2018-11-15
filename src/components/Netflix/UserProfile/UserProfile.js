import React from 'react';
import Logo from '../../../components/Logo/Logo'

const userProfile = (props) => {
    return (
        <div className="UserProfile">
          <div className="User">
            <div className="name">John Doe</div>
            <Logo />
          </div>
        </div>
      );
}

export default userProfile;