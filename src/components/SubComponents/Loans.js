import React from 'react'
import "../CompCSS/subComponenets.css"

class Loans extends React.Component{
    state = {

    }
    addLoans = ()=>{
        
    }
    render(){
        return(
            <div className="loansMain">
                <p className="bagroundTextLoan">Loans and other borrowal's</p>
                <p className="plusSign" onClick={this.addLoans}><i class="fas fa-plus-circle"></i></p>
                <div className="addLoans">
                    <input className="loanAmount" type="Number" placeholder="Principle Amount"></input>
                    
                </div>
            </div>
        );
    }
}
export default Loans;