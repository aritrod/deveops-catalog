import React, { Component } from 'react';
import Header from "../Header";
import QuickStartCosting from '../QuickStart/QuickStartCosting'
import { configs } from "../../configuration.js";
import { createIssue } from "../../utils/service.js";

class QuickStartSummary extends Component {
    state = {

    };

    render() {
        return (
            <div> 
                <div style={{ textAlign: "center", margin: "1%" }}>
                    <h5>Based on your selections below are the configuration costs available for you</h5>
                </div><br></br>
                <div>
                    <QuickStartCosting />
                </div>
            </div>
        );
    }
}

export default QuickStartSummary;