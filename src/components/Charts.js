import React from "react"
import "./CompCSS/charts.css"
import PersonalDetails from "./PersonalDetails"
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';

class Charts extends React.Component {
    state = {
        totalIncome:"",
        totalExpense:""
    }

    render() {
        const data = [
            { genre: 'Food', sold: 275, income: 2300 },
            { genre: 'Transport', sold: 115, income: 667 },
            { genre: 'Travel', sold: 120, income: 982 },
            { genre: 'Personal', sold: 350, income: 5271 },
            { genre: 'Loan', sold: 150, income: 3710 }
        ];
        const cols = {
            sold: { alias: 'Something' },
            genre: { alias: 'ToBeRender' }
        };
        return (
            <div className="mainDiv">
                <div className="totalDisplayDiv">
                        <div className="income">
                            <i class="fas fa-coins"></i>
                            <div class="tooltip">20
                                <span class="tooltiptext">Income</span>
                            </div>
                            </div>
                       <div className="expense">
                           <i class="fab fa-google-wallet"></i>
                           <div className="tooltip">40
                           <span className="tooltiptext">Expense</span>
                           </div>
                           </div>
                </div>
            <div className="chart">
                <Chart width={400} height={250} data={data} scale={cols}>
                    <Axis name="genre" title />
                    <Axis name="sold" title />
                    <Legend position="top" dy={0} />
                    <Tooltip />
                    <Geom type="interval" position="genre*sold" color="genre" />
                </Chart>
            </div>
            <div className="subContainer">
                <PersonalDetails></PersonalDetails>
            </div>
            <div className="extraDetails">
                
            </div>
            </div>
        );
    }
}
export default Charts;