import React, { Component } from 'react';
import Header from "../Header";
import CostingBenefit from '../QuickStart/CostingBenefit'

class QuickStartSummary extends Component {
    state = {

    };

    render() {
        return (
            <div> <Header />
                <div style={{ textAlign: "center", margin: "1%" }}>
                    <p class="fa fa-rocket"></p>
                    <span>Based on your selection below is the recommended landscape and cost benefits for you</span>
                </div><br></br>
                <div>
                    <CostingBenefit />
                </div>
            </div>
        );
    }
}

export default QuickStartSummary;