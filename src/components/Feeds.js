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
               <div className="feedContent" display="block">
                   <input id="feedInput" type="text" placeholder={"Hi "+this.props.name}></input>
                   <button id="postButton" onClick="">Post</button>
                    <div className="feeds">  
                        <FetchFeeds ></FetchFeeds>
                    </div>
               </div>
               <div className="charts">
                    <p>Charts</p>
               </div>
            </div>
        );
    }

}
export default Feeds;