import React, { Component } from 'react';
import Header from "../Header";
import { Link } from 'react-router-dom'
import { configs } from "../../configuration.js";
import { createIssue } from "../../utils/service.js";

class QuickStartConclusion extends Component {
    constructor() {
        super();
        this.state = {
            issueCreated: false
        }
    }
    componentDidMount(){
        createIssue(configs.githubIssueAPI, {
            method: "POST", 
            data: {
                title: "New request from Quick start panel",
                body: "this is a new request created from quick start flow",
                labels: ["sample request"]
            }, 
            token:configs.authToken}).then((data)=>{
                this.setState({issueCreated: true})
          }, (err)=> {
            console.log("Could not create issue");
            this.setState({issueCreated: false})
          })
    }

    render() {
        return (
            <div> 
            {/* <Header /> */}
                <div style={{ textAlign: "center", margin: "1%" }}>
                    <h5>
                    {this.state.issueCreated===true ? "Congratulations your request has been created and pending with our experts. You will shortly receive an email with the details." : "There is some issue while creating your request, please try after some time."}
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