import React from "react"
import Loans from "./Loans"
import "../CompCSS/subComponenets.css"

class OtherInvestments extends React.Component{
    state={
        formOpen:"none"
    }

    render(){
        return(
            <div className="otherInvestmentsMain">
                <Loans></Loans>
            </div>
        );
    }
}
export default OtherInvestments;