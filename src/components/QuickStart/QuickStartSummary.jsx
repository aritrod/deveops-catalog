import React, { Component } from 'react';
import Header from "../Header";

class QuickStartSummary extends Component {

    render() {
        return (
            <div> <Header />
                <div style={{ textAlign: "center", margin: "1%" }}>
                    <p class="fa fa-rocket"></p>
                    <span>Based on your selection below is the avilable landscape and cost benefits for you</span>
                </div>
            </div>

        );
    }
}

export default QuickStartSummary;