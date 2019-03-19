import React, { Component } from "react";
import ReactDOM from 'react-dom'
import Header from "../Header";
import {
Tabs,
Tab,
withStyles,
LinearProgress,
MuiThemeProvider,
Grid,
Dialog,
DialogTitle,
DialogContent,
DialogContentText,
DialogActions,
Button
} from "@material-ui/core";
import SolutionTab from "../SolutionTab/SolutionTab";
import styles from "./Practitioner.styles";
import theme from "../../theme";
import store from '../../store/ucd-ci-store.js';
import { Provider } from 'react-redux';
import DialogBox from '../Dialog';
import { configs } from "../../configuration.js";
import { createIssue } from "../../utils/service.js";
import InfoIcon from '@material-ui/icons/Info';
// var createIssue = require( 'github-create-issue' );

const yaml = require('js-yaml');
const fs = require("fs");
class Practitioner extends Component {
state = {
  currentSol: 0,
  data: null,
  selectedHelpOption: '',
  issueDialogOpen: false,
  radarDialogOpen: false,
  issuestatus: null,
  isprocessing: false,
  moreInfoRequired: false
};

async componentWillMount() {
  const response = await fetch("./static/data/libraries.json");

  const pipelineResponse = await fetch(
    "./static/templates/pipeline.template.mst"
  );
  const ansibleGalaxyResponse = await fetch(
    "./static/templates/ansible.galaxy.mst"
  );
  const ansiblePlaybookResponse = await fetch(
    "./static/templates/ansible.playbook.mst"
  );
  const ansiblePlaycommandsResponse = await fetch(
    "./static/templates/ansible.playcommand.mst"
  );
  const ansibleVaiablesResponse = await fetch(
    "./static/templates/ansible.variable.mst"
  );
  const ChefCookBookResponse = await fetch(
    "./static/templates/chef.role.mst"
  );
  const ChefEnvironmentResponse = await fetch(
    "./static/templates/chef.environment.mst"
  );
  const UCDCIResponse = await fetch(
    "./static/templates/ucd.ci.mst"
  );
  const UCDCIYAML = await fetch(
    "./static/data/yaml/ucd_ci.yaml"
  );
  const UCDJenkinsReponse = await fetch(
    "./static/templates/ucd.jenkins.mst"
  );
  const UCDProcessResponse = await fetch(
    "./static/templates/ucd.process.mst"
  );
  
  this.pipelineTemplate = await pipelineResponse.text();
  this.ansibleGalaxyTemplate = await ansibleGalaxyResponse.text();
  this.ansiblePlaybookTemplate = await ansiblePlaybookResponse.text();
  this.ansiblePlaycommandsTemplate = await ansiblePlaycommandsResponse.text();
  this.ansibleVaiablesTemplate = await ansibleVaiablesResponse.text();
  this.chefCookBookTemplate = await ChefCookBookResponse.text();
  this.chefEnvironmentTemplate = await ChefEnvironmentResponse.text();
  this.UCDCITemplate = await UCDCIResponse.text();
  this.UCDJenkins = await UCDJenkinsReponse.text();
  this.UCDProcessTemplate = await UCDProcessResponse.text();
  this.setState({
    data: await response.json()
  });
  store.dispatch({ type: 'INITIALIZE_STATES', payload: {
    yamlData : await yaml.safeLoad(await UCDCIYAML.text())
  }});
}

onTabClick = (value, event) => {
  this.setState({ currentSol: value });
};
changeHandler = (event) => {
  let state = event.target.value === "jiraIssue" ? "issueDialogOpen" : "radarDialogOpen";
    this.setState({
      [state]: true
    });
}
handleDialogClose = value => {
  this.setState({ issueDialogOpen: false , radarDialogOpen: false});
};
handleDialogDone = (issueDetails)=> {
  let that = this;
  this.setState({isprocessing: true})
  createIssue(configs.githubIssueAPI, {method: "POST", data: issueDetails, token:configs.authToken}).then((data)=>{
    that.setState({issuestatus: "created", isprocessing: false});
  }, (err)=> {
    that.setState({issuestatus: "error", isprocessing: false});
  })
}
showMoreInfo = ()=> {
  this.setState({moreInfoRequired: true})
}
handleDialogClose = () => {
  this.setState({moreInfoRequired : false})
}
render() {
  const { classes } = this.props;
  const { currentSol, data, moreInfoRequired } = this.state;
  return (
    <Grid>
      {data ? (
        <div>
          <DialogBox issuestatus = {this.state.issuestatus} viewtype="issue"  isprocessing={this.state.isprocessing} open={this.state.issueDialogOpen} onClose={this.handleDialogClose} onDone={this.handleDialogDone.bind(this)}
                          title='Raise an Issue' sectiontype="jiraIssue" />
          <DialogBox isFullWidth={true} viewtype="techRadar"  open={this.state.radarDialogOpen} onClose={this.handleDialogClose} onDone={this.handleDialogDone.bind(this)}
                          title='Tech Radar' sectiontype="techRadar" />
          <div className={classes.tabs}>
          <Tabs
              value={currentSol}
              indicatorColor="primary"
            >
              {Object.keys(data).map((sol, index) => (
                <p className={classes.tabHolder}>
                <Tab onClick={this.onTabClick.bind(this, index)} className={classes.solType} key={sol} label={sol}/>
                {sol==="Jenkins" && <InfoIcon className={classes.showMoreInfo} onClick={this.showMoreInfo}/>}
                </p>
              ))}
            </Tabs>
            <Dialog
                    open={moreInfoRequired}
                    onClose={this.handleDialogClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{"Here are the details: "}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Below is the available landscape you can get as part of this platform
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleDialogClose} color="primary" >
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            {Object.keys(data).map(
              (sol, index) =>
                currentSol === index ? (
                  <SolutionTab
                    key={sol}
                    currentSol = {sol}
                    data={data[sol]}
                    pipelineTemplate={this.pipelineTemplate}
                    ansibleGalaxyTemplate = {this.ansibleGalaxyTemplate}
                    ansiblePlaybookTemplate = {this.ansiblePlaybookTemplate}
                    ansiblePlaycommandsTemplate = {this.ansiblePlaycommandsTemplate}
                    ansibleVaiablesTemplate = {this.ansibleVaiablesTemplate}
                    chefCookBookTemplate = {this.chefCookBookTemplate}
                    chefEnvironmentTemplate = {this.chefEnvironmentTemplate}
                    UCDCITemplate = {this.UCDCITemplate}
                    UCDJenkins = {this.UCDJenkins}
                    UCDProcessTemplate = {this.UCDProcessTemplate}
                  />
                ) : null
            )}
          </div>
        </div>
      ) : (
        <LinearProgress color="primary" />
      )}
    </Grid>
  );
}
}

export default withStyles(styles)(Practitioner);
