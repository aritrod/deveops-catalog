import React, { Component } from 'react';
import Header from "../Header";
import { Link } from 'react-router-dom'
import { configs } from "../../configuration.js";
import { createIssue } from "../../utils/service.js";
import styles from './QuickStart.styles';
import { withStyles } from '@material-ui/core/styles';

class QuickStartConclusion extends Component {
    constructor() {
        super();
        this.state = {
            issueCreated: false,
            issueURL: '',
            issueID: ''
        }
    }
    componentDidMount() {
        createIssue(configs.githubIssueAPI, {
            method: "POST",
            data: {
                title: "New request from Quick start panel",
                body: "this is a new request created from quick start flow",
                labels: ["sample request"]
            },
            token: configs.authToken
        }).then((data) => {
            console.log("issue created");
            this.setState({ issueCreated: "true", issueURL: data.html_url, issueID: data.id})
        }, (err) => {
            console.log("Could not create issue");
            this.setState({ issueCreated: "false" })
        })
    }

    render() {
        const { classes } = this.props;
debugger;
        return (
            <div className={classes.conclusionWrapper}>
                <div className={classes.conclusionMargin}>
                    { this.state.issueCreated==="true" && 
                        (
                            <div className={classes.conclusionHeadWrapper}>
                        <p>
                        <img
                                src="./static/images/solidcheck.png"
                                alt=""
                                height="50" width="50"
                        />
                            <span className={classes.conclusionHeading}>Your order is set-up</span>
                            </p>
                            <p className={classes.success}>Your Github issue is created, Here are the details: </p>
                            <p>Issue ID - {this.state.issueID}</p>
                            <a className={classes.compLink} href={this.state.issueURL} target="_blank">{this.state.issueURL}</a>
                            <p>Your application will be online by 15/4/2019</p>
                            <p>We will keep you posted for further updates.</p>
                        </div>
                        )
                    }
                </div>
                <div>
                    <img
                        src="./static/images/Track Card.png"
                        alt=""
                        height="250" width="800"
                    />
                </div>
                <div className={classes.conclusionTimeline}>
                    <p>Jump start your project with content from our DevOps community.</p>
                </div>
                <div>
                    <img
                        src="./static/images/Jenkins Card.png"
                        alt=""
                        height="400" width="350"
                    />
                    <img
                        src="./static/images/Urban Card.png"
                        alt=""
                        height="400" width="350"
                    />
                </div>

                {/* <div style={{ textAlign: "center", margin: "1%" }}>
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
                    <Link className={classes.clickablelink} to='/landing'>Back to catalog</Link>
                </div> */}
            </div>
        );
    }
}

export default withStyles(styles)(QuickStartConclusion);