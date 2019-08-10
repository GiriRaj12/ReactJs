import React from "react"
import "../CompCSS/subComponenets.css"

class OtherInvestments extends React.Component{
    render(){
        return(
            <div className="otherInvestmentsMain">
                <p className="bagroundTextOtherInvestMents">Asserts </p>
                <p className="plusSign"><i class="fas fa-plus-circle"></i></p>
            </div>
        );
    }
}
export default OtherInvestments;