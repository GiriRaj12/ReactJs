import React from "react";
import "./CompCSS/fetchFeeds.css";
import axios from "axios";

class FetchFeeds extends React.Component {
    state = {
        status: [
            {
                id: "money1",
                money: 10,
                type: "Income",
                service: "Cash Back",
                statusTime: new Date().toLocaleDateString()
            },
            {
                id: "money2",
                serviceType: "Expenditure",
                cost: 20,
                service: "Food",
                statusTime: new Date().toLocaleDateString()

            },
            {
                id: "money",
                cost: 10000,
                serviceType: "Income",
                service: "Salary",
                statusTime: new Date().toLocaleDateString()
            },
            {
                id: "money3",
                serviceType: "Expenditure",
                cost: 200,
                service: "Party",
                statusTime: new Date().toLocaleDateString()

            }
        ]
    }
    componentDidMount() {
        this.props.onRef(this)
      }
    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    addStatus(){
        axios.get("http://localhost:8080/status/getAll")
        .then(response=>{
            console.log(response.data);
            this.setState({status:this.state.status.concat(response.data)});
        })
        }
    
    getColor = (str) => {
        if (str === "Expenditure")
            return "#D74046";
        else {
            return "dodgerblue";
        }
    }

    render() {
        return (
            <div className="showFeeds">
                <ul className="feedsList">
                    {this.state.status.map((status) =>
                        <li><div className="feedsContainer"><div className="profile" style={{ backgroundColor: this.getColor(status.serviceType) }}></div>
                            <p id="name">{status.serviceType + " : " + status.cost}<i className="fas fa-rupee-sign" id="rupeeSign"></i></p><br />
                            <p id="content">{status.service}</p>
                            <p id="timeStamp">{"Happened in : " + status.statusTime}</p>
                        </div></li>
                    )}
                </ul>
            </div>
        );
    }

}

export default FetchFeeds;
