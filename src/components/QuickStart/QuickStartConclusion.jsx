import React, { Component } from 'react';
import Header from "../Header";
import { Link } from 'react-router-dom'

class QuickStartConclusion extends Component {
    state = {

    };

    render() {
        return (
            <div> 
            {/* <Header /> */}
                <div style={{ textAlign: "center", margin: "1%" }}>
                    <h5>Congratulations your request has been created and pending with our experts. You will shortly receive an email with the details.
                </h5>
                </div><br></br>
                <div style={{ textAlign: "center", margin: "1%" }}><p class='fa fa-check-circle fa-2x' style={{ color: "green" }} /><br></br>
                    <img
                        src="./static/images/rocketship.png"
                        alt=""
                        height="300" width="300"
                    /><br></br></div>
                <div style={{ textAlign: "center", margin: "1%" }}>
                    <Link to='/landing'>Back to catalog</Link>
                </div>
            </div>
        );
    }
}

export default QuickStartConclusion;