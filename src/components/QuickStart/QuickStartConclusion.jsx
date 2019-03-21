import React, { Component } from 'react';
import Header from "../Header";
import { Link } from 'react-router-dom'
import { configs } from "../../configuration.js";
import { createIssue } from "../../utils/service.js";
import styles from './QuickStart.styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SaveIcon from "@material-ui/icons/Save";
import saveAs from "file-saver";

class QuickStartConclusion extends Component {
    constructor() {
        super();
        this.state = {
            issueCreated: false,
            issueURL: '',
            issueID: '',
            showExportJsonDialog: false
        }
    }

    jsonContent = {
        "GHE Organization": " Lloyds",
        "GHE Service user/token": "ACBDGDGK",
        "Email": "default@Lloyds.com"
    }
    componentDidMount() {
        createIssue(configs.githubIssueAPI, {
            method: "POST",
            data: {
                title: "Request created for provisioning new ALF platform",
                body: "This is a new request created for 3 node large selection, and requested by malcolm.orr@publicissapient.com"
            },
            token: configs.authToken
        }).then((data) => {
            console.log("issue created");
            this.setState({ issueCreated: "true", issueURL: data.html_url, issueID: data.id })
        }, (err) => {
            console.log("Could not create issue");
            this.setState({ issueCreated: "false" })
        })
    }

    openJsonDialog = () => {
        this.setState({ showExportJsonDialog: true });
    }

    handleJsonDialogClose = () => {
        this.setState({ showExportJsonDialog: false });
    };

    download = (content, filename = "file") => {
        if (!content) return;
        var blob = new Blob([content]);
        saveAs(blob, filename);
    };

    render() {
        const { classes } = this.props;
        const { showExportJsonDialog } = this.state;

        return (
            <div>
                <Dialog
                    open={showExportJsonDialog}
                    onClose={this.handleJsonDialogClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{"Service Request"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Below is the service catalog json to be exported
                        </DialogContentText><br></br>
                        <pre>
                        {JSON.stringify(this.jsonContent, null, 3)}
                        </pre>

                    </DialogContent>
                    <DialogActions>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.btnSave}
                            onClick={() => {
                                this.download(JSON.stringify(this.jsonContent), "Jsonfile");
                            }}
                        >
                            <SaveIcon className={classes.btnIcon} />
                            Save
                            </Button>
                        <Button onClick={this.handleJsonDialogClose} color="primary" >
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
                <div className={classes.conclusionWrapper}>
                    <div className={classes.conclusionMargin}>
                        {this.state.issueCreated === "true" &&
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
                        <Button className={classes.exportJsonBtn} variant="contained" color="primary">
                            <a onClick={this.openJsonDialog}>Export JSON</a>
                        </Button>
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
                    
                </div>
            </div>

        );
    }
}

export default withStyles(styles)(QuickStartConclusion);