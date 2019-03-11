import React, { Component } from "react";
import ReactDOM from 'react-dom'
import Header from "../Header";
import {
  Tabs,
  Tab,
  withStyles,
  LinearProgress,
  MuiThemeProvider
} from "@material-ui/core";
import SolutionTab from "../SolutionTab/SolutionTab";
import styles from "./App.styles";
import theme from "../../theme";
import store from '../../store/ucd-ci-store.js';
import { Provider } from 'react-redux'
const yaml = require('js-yaml');
const fs = require("fs");
class App extends Component {
  state = {
    currentSol: 0,
    data: null
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

  onTabClick = (event, value) => {
    this.setState({ currentSol: value });
  };

  render() {
    const { classes } = this.props;
    const { currentSol, data } = this.state;
    return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        {data ? (
          <div>
            <Header />
            <div className={classes.tabs}>
              <Tabs
                value={currentSol}
                onChange={this.onTabClick}
                indicatorColor="primary"
              >
                {Object.keys(data).map(sol => (
                  <Tab className={classes.solType} key={sol} label={sol} />
                ))}
              </Tabs>
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
      </MuiThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
