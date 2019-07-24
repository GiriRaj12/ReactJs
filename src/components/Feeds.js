import React from 'react';
import FetchFeeds from "./FetchFeeds";
import './CompCSS/feeds.css';

class Feeds extends React.Component {
    constructor(props){
        super(props);
        this.state={value:""}
        this.setCost = this.setCost.bind(this);
    }
    state = {
        toggleNumber: "",
        choise: "",
        service:"",
        cost:""
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

    addStatus = (event)=>{
        this.child.addStatus();
    }
    setCost = (event)=>{
        console.log(event.target.value);
        this.setState({cost:event.target.value});
    }
    setService = (event)=>{
        this.setState({service:event.target.value});
    }


    render() {
        return (
            <div className="mainContainer">
                <div className="feedsDiv">
                    <div className="feedContent">
                            <div className="statusHolder">
                            <div className="container" onClick={this.toggle}>
                                <div class="inner-container">
                                    <div class="toggle">
                                        <p>Expense</p>
                                    </div>
                                    <div class="toggle">
                                        <p>Income</p>
                                    </div>
                                </div>
                                <div class="inner-container" id='toggle-container'>
                                    <div class="toggle">
                                        <p>Expense</p>
                                    </div>
                                    <div class="toggle">
                                        <p>Income</p>
                                    </div>
                                </div>
                            </div>
                            <input id="cost" value={this.state.value} type="number" placeholder="Cost" min="0" onChange={this.setCost}></input>
                            <input id="service" name="service" type="text" placeholder="Reason for income or Expenses" onChange={this.setService}></input>
                            <button className="postButton add-btn" onClick={this.addStatus}>
                            <div class="add-icon"></div>
                            <div class="btn-txt">Post</div>
                            </button>
                            <hr class="line" />
                            </div> 
                        <div className="feeds">
                            <FetchFeeds onRef={ref=>(this.child = ref)} cost={this.state.cost} service={this.state.service} choise={this.state.choise} ></FetchFeeds>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }

}
export default Feeds;