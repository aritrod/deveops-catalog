import React, { Component } from 'react';
import Header from "../Header";
import QuickStartCosting from '../QuickStart/QuickStartCosting'

class QuickStartSummary extends Component {
    state = {

    };

    render() {
        return (
            <div> 
            {/* <Header /> */}
                <div style={{ textAlign: "center", margin: "1%" }}>
                    <h5>Based on your selection below is the recommended landscape and cost benefits for you</h5>
                </div><br></br>
                <div>
                    <QuickStartCosting />
                </div>
            </div>
        );
    }
}

export default QuickStartSummary;