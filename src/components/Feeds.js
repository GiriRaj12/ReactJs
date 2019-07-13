import React from 'react';
import './CompCSS/feeds.css';

class Feeds extends React.Component{
    state = {
        content : "Feeds"
    }
    render(){
        const data = this.state.content;
        return (
            <div className="container">
                <div className="feedsView">
                <p id="feedParagrapgh">{data}</p>
               </div>
               <div className="feedContent">
                   <input id="feedInput" type="text" placeholder={"Hi "+this.props.name}></input>
                   <button id="postButton">Post</button>
               </div>
            </div>
        );
    }
}
export default Feeds;