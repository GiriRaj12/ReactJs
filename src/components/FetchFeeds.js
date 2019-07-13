import React from "react";

class FetchFeeds extends React.Component{
    state = {
        feeds:[
            {
                id:"d1",
                content:"Learning React js",
                name:"Giriraj"
            },
            {
                id:"d2",
                content:"Learning Android",
                name:"Tamil"
            },
            {
                id:"d3",
                content:"Business Analytics",
                name:"Swetha"
            }
        ]
    }
    render(){
        return(
            <div className="statusFeeds">
                {this.state.feeds.map(()=>(
                    <h4>{this.state.feeds.content}</h4>
                ))}
            </div>
        );
    }
}

export default FetchFeeds;
