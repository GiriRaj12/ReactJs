import React from "react"
import Loans from "./SubComponents/Loans"
import Investments from "./SubComponents/Investments"
import "./CompCSS/personalDetails.css"
import OtherInvestments from "./SubComponents/OtherInvestments"

class PersonalDetails extends React.Component{
    state={

    }
    render(){
        return(
            <div className="mainDiv">  
                <div className="loanDiv">
                    <Loans></Loans>
                </div>
                <div className="investments">
                    <Investments></Investments>
                </div>
                <div className="rentAndOtherIncomeSourses">
                        <OtherInvestments></OtherInvestments>                   
                </div>
            </div>
        );
    }

}
export default PersonalDetails;