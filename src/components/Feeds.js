import React from 'react';
import FetchFeeds from "./FetchFeeds";
import Charts from "./Charts";
import './CompCSS/feeds.css';
import axios from 'axios';

class Feeds extends React.Component {
    state = {
        toggleNumber: "",
        choise: "Income",
        service: "",
        cost: "",
        feeds: "block",
        charts: "none",
        income:"",
        expense:""
    }

    componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    componentWillReceiveProps(){
        var display = this.props.buttonClicked;
        if (display === "feeds") {
            this.setState({ feeds: "block" });
            this.setState({ charts: "none" });
        }
        if (display === "charts") {
            this.setState({ feeds: "none" });
            this.setState({ charts: "block" });
        }
    }

    changeAccordingly() {
        console.log("came in ");
        var display = this.props.buttonClicked;
        console.log(this.props.buttonClicked);
        if (display === "feeds") {
            this.setState({ feeds: "block" });
            this.setState({ charts: "none" });
        }
        if (display === "charts") {
            this.setState({ feeds: "none" });
            this.setState({ charts: "block" });
        }
    }


    toggle = () => {
        var toggleContainer = document.getElementById('toggle-container');
        this.state.toggleNumber = !this.state.toggleNumber;
        if (this.state.toggleNumber) {
            toggleContainer.style.clipPath = 'inset(0 0 0 50%)';
            toggleContainer.style.backgroundColor = '#D74046';
            this.setState({ choise: "Expenditure" })
        } else {
            toggleContainer.style.clipPath = 'inset(0 50% 0 0)';
            toggleContainer.style.backgroundColor = 'dodgerblue';
            this.setState({ choise: "Income" })
        }
        console.log(this.toggleNumber)
        console.log(this.state.choise)
    }

    addStatus = (event) => {
        this.setState({ cost: document.getElementById("cost").value });
        this.setState({ service: document.getElementById("service").value }, () => {
            axios.post("http://localhost:8081/status/save",{
                "id":this.props.id,
                "cost":this.state.cost,
                "service":this.state.service,
                "serviceType":this.state.choise
            })
            .then(res=>{
                console.log(res.data);
                this.child.addStatus();
                this.clear();  
            })
        });
    }

    clear() {
        document.getElementById("cost").value = "";
        document.getElementById("service").value = "";
    }


    render() {
        return (
            <div className="mainContainer">
                <div className="feedsDiv" style={{ display: this.state.feeds }}>
                    <div className="feedContent">
                        <div className="statusHolder">
                            <div className="container" onClick={this.toggle}>
                                <div className="inner-container">
                                    <div className="toggle">
                                        <p>Expense</p>
                                    </div>
                                    <div className="toggle">
                                        <p>Income</p>
                                    </div>
                                </div>
                                <div className="inner-container" id='toggle-container'>
                                    <div className="toggle">
                                        <p>Expense</p>
                                    </div>
                                    <div className="toggle">
                                        <p>Income</p>
                                    </div>
                                </div>
                            </div>
                            <input id="cost" value={this.state.value} type="number" placeholder="Cost" min="0"></input>
                            <input id="service" name="service" type="text" placeholder="Reason for income or Expenses"></input>
                            <button className="postButton add-btn" onClick={this.addStatus}>
                                <div className="add-icon"></div>
                                <div className="btn-txt">Post</div>
                            </button>
                            <hr className="line" />
                        </div>
                        <div className="feeds">
                            <FetchFeeds onRef={ref => (this.child = ref)}></FetchFeeds>
                        </div>
                    </div>
                </div>
                <div className="charstDiv" style={{ display: this.state.charts }}>
                    <Charts></Charts>
                </div>
            </div>
        );
    }

}
export default Feeds;