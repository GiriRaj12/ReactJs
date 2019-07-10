import React from 'react';
import './CompCSS/feeds.css';

class Feeds extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="feedsView">
                <p id="feedParagrapgh">Feeds</p>
               </div>
               <div className="feedContent">
                   <input id="feedInput" type="text" placeholder="Status"></input>
                   <button id="postButton">Post</button>
               </div>
            </div>
        );
    }
}
export default Feeds;