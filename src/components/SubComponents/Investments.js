import React from 'react'
import "../CompCSS/subComponenets.css"
import Loans from './Loans';
class Investments extends React.Component{
    
    render(){
        return (
            <div className="investmentsMain">
                <Loans></Loans>
            </div>
        );
    }
}
export default Investments;