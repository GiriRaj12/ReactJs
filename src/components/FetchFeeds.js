import React from "react";
import "./CompCSS/fetchFeeds.css";

class FetchFeeds extends React.Component {
    state = {
        status: [
            {
                id: "money1",
                money: 10,
                type: "Income",
                service: "Cash Back",
                statusTime: new Date().toLocaleString()
            },
            {
                id: "money2",
                type: "Expenditure",
                money: 20,
                service: "Food",
                statusTime: new Date().toLocaleString()

            },
            {
                id: "money",
                money: 10000,
                type: "Income",
                service: "Salary",
                statusTime: new Date().toLocaleString()
            },
            {
                id: "money3",
                type: "Expenditure",
                money: 200,
                service: "Party",
                statusTime: new Date().toLocaleString()

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
        var something = {
            id:"money5",
            type:this.props.choise,
            money:this.props.cost,
            service:this.props.service,
            statusTime: new Date().toLocaleDateString()
        }
        this.setState(status=>({
            status:[...status,something]
        }))
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
                        <li><div className="feedsContainer"><div className="profile" style={{ backgroundColor: this.getColor(status.type) }}></div>
                            <p id="name">{status.type + " : " + status.money}<i class="fas fa-rupee-sign" id="rupeeSign"></i></p><br />
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
