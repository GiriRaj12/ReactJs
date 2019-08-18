import React from 'react'
import "../CompCSS/subComponenets.css"

class Loans extends React.Component{
    state={
        formOpen:"none",
        transform:"rotate(0deg)"
    }
    cancel = ()=>{
        console.log("Came in cancel");
        this.setState({formOpen:"none"})
        this.setState({transform:"rotate(0deg)"})
    }
    show= ()=>{
        console.log("came in show");
        if(this.state.formOpen === "block")
        {
            this.setState({formOpen:"none"})
            this.setState({transform:"rotate(0deg)"})
        }
        else{
            this.setState({formOpen:"block"})
            this.setState({transform:"rotate(45deg)"})
        }
    }
    render(){
        return(
            <div className="loansMain">
                <p className="bagroundTextLoan">Loans and other borrowal's</p>
                <p className="plusSign" onClick={this.show} style={{transform:this.state.transform}}><i class="fas fa-plus-circle"></i></p>
                <div className="addLoans">
                    <div className="loansDiv" style={{display:this.state.formOpen}}>
                        <div className="loanPopup" style={{display:this.state.formOpen}}> 
                            <input className="loanInput"></input>
                            <input className="loanInput"></input>
                            <input className="loanInput"></input>
                            <button className="cancelButton"onClick={this.cancel}>Cancel</button>  
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Loans;