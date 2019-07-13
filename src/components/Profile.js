import React from 'react';
import './CompCSS/profile.css';

class Profile extends React.Component{
    render(){
        return (
            <div className="Profile">
                <nav>
                    <div className="logo">
                        <div id="fastLogo"><i className="fa fa-shipping-fast"></i></div>
                    </div>
                    <div id="facebook"><i className="fab fa-facebook"></i></div>
                    <div id="admin"><i className="fas fa-user-cog"></i></div>
                </nav>
            </div>

        );
    }
}
export default Profile;
