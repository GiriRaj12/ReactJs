import React from 'react';
import './profile.css';

class Profile extends React.Component{
    state ={
        a:10
    }
    adminEvent(event){
        
    }
    render(){
        return (
            <div className="Profile">
                <nav>
                    <div className="logo">
                        <div id="fastLogo"><i class="fa fa-shipping-fast"></i></div>
                    </div>
                    <div id="facebook"><i class="fab fa-facebook"></i></div>
                    <div id="admin"><i class="fas fa-user-cog"></i></div>
                </nav>
            </div>

        );
    }
}
export default Profile;
