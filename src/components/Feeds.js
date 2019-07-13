import React from 'react';
import FetchFeeds from "./FetchFeeds";
import './CompCSS/feeds.css';

class Feeds extends React.Component{
    state = {
        content : "Feeds"
    }
    render(){
        return (
            <div className="container">
                <div className="feedsView">
                <p id="feedParagrapgh">{this.state.content}</p>
               </div>
               <div className="feedContent">
                   <input id="feedInput" type="text" placeholder={"Hi "+this.props.name}></input>
                   <button id="postButton">Post</button>
                    <div className="feeds">  
                        <FetchFeeds/>
                    </div>
               </div>
            </div>
        );
    }

}
export default Feeds;