import React from "react";
import "./CompCSS/fetchFeeds.css";

class FetchFeeds extends React.Component{
    state = {
        feeds:[
            {
                id:"d1",
                content:"Learning React js in a reactive environment",
                name:"Giriraj"
            },
            {
                id:"d2",
                content:"Learning Android by doing things",
                name:"Tamil"
            },
            {
                id:"d3",
                content:"Business Analytics this is an interesting topic.",
                name:"Sriram"
            },
            {
                id:"d4",
                content:"Analytics session that is to be handle",
                name:"Santhi"
            }
        ]
    }
    render(){
        return(
            <div>
                <ul className="feedsList">
                    <li><div className="feedsContainer"><div className="profile"></div>
                    <p id="name">{this.state.feeds[0].name}</p><br/>
                    <p id="content">{this.state.feeds[0].content}</p>
                    </div></li>

                    <li><div className="feedsContainer"><div className="profile"></div>
                    <p id="name">{this.state.feeds[1].name}</p><br/>
                    <p id="content">{this.state.feeds[1].content}</p>
                    </div></li>

                    <li><div className="feedsContainer"><div className="profile"></div>
                    <p id="name">{this.state.feeds[2].name}</p><br/>
                    <p id="content">{this.state.feeds[2].content}</p>
                    </div></li>

                    <li><div className="feedsContainer"><div className="profile"></div>
                    <p id="name">{this.state.feeds[3].name}</p><br/>
                    <p id="content">{this.state.feeds[3].content}</p>
                    </div></li>   
                </ul>
            </div>
        );
    }
}

export default FetchFeeds;
