import React from "react";
import axios from "axios";
import "./CompCSS/fetchFeeds.css";

class FetchFeeds extends React.Component{
    state = {
        cursor : 0,
        feeds:[{
            "UserId": 101,
            "id": 101,
            "title": "This is first",
            "Body": "And it takes  nsuscipit follow accepted lightly with  nreprehenderit discomfort may be the entire nnostrum of the things that happens is that they are extremely"
          },
          {
            "UserId": 102,
            "id": 102,
            "title": "This is custom",
            "Body": "And it takes nsuscipit follow accepted lightly with nreprehenderit discomfort may be the entire nnostrum of the things that happens is that they are extremely"
          }
        ],
        tempArray:[]
    }

    loadFeeds = ()=>{
        console.log("Into loadFeeds");
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(response =>
            response.data.map((data)=>{
                this.setState({feeds:[...this.state.feeds,data]})
                return null;
            }));
    }
    showFeeds = ()=>{
        for(let i=0;i<20;i++){
            console.log(i);
        }
    }
    post = ()=>{
        console.log("came in post");
    }
    render(){
        return(
            <div className="showFeeds">
                {this.loadFeeds}
                <ul className="feedsList">
                    {this.state.feeds.map((data)=>
                    <li><div className="feedsContainer"><div className="profile"></div>
                    <p id="name">{data.id}</p><br/>
                    <p id="content">{data.title}</p>
                    </div></li>
                    )}
                </ul>
                <button onClick={this.loadFeeds} className="loadFeedsButton">Load More</button> 
            </div>
        );
    }

}

export default FetchFeeds;
