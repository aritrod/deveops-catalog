import React, { Component } from 'react';
import Header from "../Header";

class QuickStartSummary extends Component {

    render() {
        return (
            <div> <Header />
                <div style={{ textAlign: "center", margin: "1%" }}>
                    <p class="fa fa-rocket"></p>
                    <span>Congratulations your request is being processed</span>
                </div>
            </div>

        );
    }
}

export default QuickStartSummary;