import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./Header.styles";
import classnames from "classnames";
import { Link } from 'react-router-dom';
import DialogBox from '../Dialog';
import { createIssue } from "../../utils/service.js";
import { configs } from "../../configuration.js";

class HeaderCommon extends Component 
{
    state = {
        selectedHelpOption: '',
        issueDialogOpen: false,
        issuestatus: null,
        isprocessing: false
      };
      handleDialogClose = value => {
        this.setState({issueDialogOpen: false});
      };
      openDialog = () => {
          this.setState({"issueDialogOpen" : true})
      }
      handleDialogDone = (issueDetails)=> {
        let that = this;
        this.setState({isprocessing: true})
        createIssue(configs.githubIssueAPI, {method: "POST", data: issueDetails, token:configs.authToken}).then((data)=>{
          that.setState({issuestatus: "created", isprocessing: false});
        }, (err)=> {
          that.setState({issuestatus: "error", isprocessing: false});
        })
      }
    render()
    {
    const { classes } = this.props;
    return (
        <div className={classnames('row', 'col-sm-12', classes.headerCommon)}>
            <div className={classnames('col-sm-2')}>
                <img
                    className={classes.headerCommonImage}
                    src="./static/images/lloyds_banking_header_logo.png"
                    alt="Lloyds Personal Banking"
                />
            </div>
            <div className={classnames('col-sm-2', classes.headerCommonWrapper)}>
                <p className={classes.headerCommonTitle}>DevOps Commons</p>
            </div>
            <div className="col-sm-3"></div>
            <div className={classnames('col-sm-1', classes.headerActions)}>
                <a className={classes.headerControls} target="_blank" href="http://monitoring.k8st1.lbg.eu-gb.mybluemix.net/d/at-cost-analysis/analysis-by-cluster?refresh=10s&orgId=1">Features</a>
            </div>
            <div className={classnames('col-sm-1', classes.headerActionsGap, classes.headerActions)}>
                <a className={classes.headerControls} href="javascript:void(0)">Docs</a>
            </div>
            <div className={classnames('col-sm-1', classes.headerActions)}>
                <a className={classes.headerControls} href="javascript:void(0)" onClick={this.openDialog}>Feedback</a>
            </div>
            <DialogBox issuestatus = {this.state.issuestatus} viewtype="issue"  isprocessing={this.state.isprocessing} open={this.state.issueDialogOpen} onClose={this.handleDialogClose} onDone={this.handleDialogDone.bind(this)}
                          title='Feedback: Please provide below details' sectiontype="jiraIssue" isFullWidth = {false}/>
            <div className={classnames('col-sm-2', classes.headerQuickStart)}>
                <button className={classes.headerQuickStartButton}>
                <Link to='/quickStartPlatform' className={classes.buttonLabel}>Quick Start</Link>
                </button>
            </div>
        </div>
    );
}
}

export default withStyles(styles)(HeaderCommon);
