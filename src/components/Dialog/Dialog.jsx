import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Dialog.styles";
import classnames from "classnames";

import {
  withStyles,
  DialogTitle,
  Dialog,
  DialogContent,
  TextField,
  FormControl,
  Button,
  Typography
} from "@material-ui/core";
import { debug } from 'util';

class DialogBox extends React.Component {
  state = {
    properties : [""],
    jiraStates: {
      title: "",
      body: "",
      labels: []
    }
  };
  handleClose = () => {
    this.setState({ 
      properties: [""],
      jiraStates: {
        ...this.state.jiraStates,
        title: "",
        body: "",
        labels: []
  }
    });
    this.props.onClose();
  };
  handleDone = (details, event) => {
    event && event.preventDefault();
    this.props.onDone(details);
    this.setState({ 
      properties: [""],
      jiraStates: {
        ...this.state.jiraStates,
        title: "",
        body: "",
        labels: []
    }
  })
  };
  handleChange = index => event => {
    let existingProps = this.state.properties.slice();
    existingProps[index] = event.target.value;
    this.setState({ 
      properties: existingProps
    });
  };
  handleJiraChange = (key, event) => {
    let val = event.target.value;
    if(key==="labels") val = val.split(",");
    this.setState({
      jiraStates: {
            ...this.state.jiraStates,
            [key]: val
      }
  })
  }
  addProp = () => {
    let existingProps = this.state.properties.slice();
    existingProps.push("");
    this.setState({ 
      properties: existingProps
    });
  }
  
  renderPropView(){
    const { classes, onClose, title, ...other} = this.props;
    return (
      <div className= {classes.dialogWraper}>
      {this.state.properties.map((property, index)=>{
        return (<TextField
                key = {index}
                label={`Enter Property Name`}
                className={classes.textField}
                value={property}
                onChange={this.handleChange(index)}
                margin="normal"
                />)  
      })}
      <div className={classes.buttonArea}>
      <Button variant="contained" 
              color="primary" 
              className={classes.btnAdd}
              onClick={() => {
                  this.addProp()
              }}>
              Add More Prop
      </Button>
      <Button variant="contained" 
              color="primary" 
              className={classes.btnAdd}
              onClick={() => {
                  this.handleDone({properties: this.state.properties, section: this.props.sectiontype})
              }}>
              Done
      </Button>
      <Button variant="contained" 
              color="primary" 
              className={classes.btnAdd}
              onClick={() => {
                  this.handleClose()
              }}>
              close
      </Button>
      </div>
      </div>
    )
  }
  renderIssueView(){
    const { classes, onClose, title} = this.props;
    let jiraStates = this.state.jiraStates;
    return (
      <div className= {classes.dialogWraper}>
      {Object.keys(jiraStates).map((key, index)=>{
        return (
          <TextField
                required
                key = {index}
                label={`Enter value for ${key}`}
                className={classes.textField}
                value={jiraStates[key]}
                onChange={this.handleJiraChange.bind(this, key)}
                margin="normal"
                />
        )
      })}
      <div className={classes.buttonArea}>
      <Button variant="contained" 
              color="primary" 
              className={classes.btnAdd}
              onClick={() => {
                  this.handleClose()
              }}>
              Close
      </Button>
      <Button variant="contained" 
            disabled = {this.props.isprocessing}
              type = "submit"
              color="primary" 
              className={classes.btnAdd}
              >
              Done
      </Button>
      </div>
      {this.props.issuestatus==="created" && <Typography variant="h6" className={classes.successStatus}>
        Success: Issue is created and we will update you soon.
      </Typography>}
      {this.props.issuestatus==="error" && <Typography variant="h6" className={classes.errorStatus}>
        Error: There is some issue while creating the Issue , Please try again after some time.
      </Typography>}
      </div>
    )
  }
  renderTechRadarView(){
    const { classes, title, ...other} = this.props;
    return (<object className={classes.iframObject} data="https://devops-radar.lbg.eu-gb.mybluemix.net/#/technology-radar/radar?radar=lloyv2" width="100%" height="100%" type="text/html">
            There are some issues while loading the page
          </object>)
  }

  render() {
    const { classes, title, ...other} = this.props;
    return (
      <Dialog 
        maxWidth= "lg"
        fullWidth= {true}
        autoDetectWindowHeight={false} 
        autoScrollBodyContent={false}
      className={classnames(
        this.props.viewtype==="techRadar" && classes.iframeRender
      )} disableBackdropClick={true} disableEscapeKeyDown ={false} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
        <DialogContent className={classes.dialogContent}>
        <form className= {classes.formControl} onSubmit={this.handleDone.bind(this, {...this.state.jiraStates})}>
          {this.props.viewtype==="property" ? this.renderPropView() : (this.props.viewtype==="issue" ? this.renderIssueView() : this.renderTechRadarView())}
        </form>
        </DialogContent>
      </Dialog>
    );
  }
}

Dialog.propTypes = {
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
  title: PropTypes.string
};

export default withStyles(styles)(DialogBox);