import React from 'react'
import "../CompCSS/subComponenets.css"
class Investments extends React.Component{
    state={

    }
    render(){
        return (
            <div className="investmentsMain">
                <p className="bagroundTextInvestMents">Investments and Income Modes</p>
                <p className="plusSign"><i class="fas fa-plus-circle"></i></p>
            </div>
        );
    }
}
export default Investments;