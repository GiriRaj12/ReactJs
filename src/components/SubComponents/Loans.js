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
                    <label>Bank Name :</label>
                    <input className="bankName" type="text" placeholder="Bank Name"></input>
                    <label>Loan Amount :</label>
                    <input className="loanAmount" type="Number" placeholder="Principle Amount"></input>
                    <label>Interest </label>
                    <input className="interestAmount" type="Number" placeholder="Interest for Principle"></input><br></br>
                    <label>Months :</label>
                    <input className="monthsPlanned" type="Number" min="0" placeholder="Months Planned"></input>
                </div>
            </div>
        );
    }
}
export default Loans;