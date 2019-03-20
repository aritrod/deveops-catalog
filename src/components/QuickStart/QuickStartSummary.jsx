import React, { Component } from 'react';
import Header from "../Header";
import QuickStartCosting from '../QuickStart/QuickStartCosting'
import { configs } from "../../configuration.js";
import { createIssue } from "../../utils/service.js";
import { withStyles } from '@material-ui/core/styles';
import styles from './QuickStart.styles';

class QuickStartSummary extends Component {
    state = {

    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.summaryWrapper}> 
                <div style={{ textAlign: "center", margin: "1%" }}>
                    <h5>Based on your selection below are the costings for you</h5>
                </div><br></br>
                <div>
                    <QuickStartCosting />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(QuickStartSummary);