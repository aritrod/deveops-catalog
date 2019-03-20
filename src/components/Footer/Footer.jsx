import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styles from "./Footer.styles";
import { Button } from "@material-ui/core";
import { configs } from "../../configuration.js";
import { createIssue } from "../../utils/service.js";
import DialogBox from '../Dialog';

class Footer extends Component 
{
  state = {
    radarDialogOpen: false
  };
  handleDialogClose = value => {
    this.setState({radarDialogOpen: false});
  };
  openDialog = () => {
      this.setState({"radarDialogOpen" : true})
  }
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.footerPos}>
        <p className={classes.footerText}>View what's available on</p>
        <button className={classes.footerButton} onClick={this.openDialog}>
        Lloyds Tech Radar
        </button>
        <DialogBox isFullWidth={true} viewtype="techRadar"  open={this.state.radarDialogOpen} onClose={this.handleDialogClose}
                          title='Tech Radar' sectiontype="techRadar" />
      </div>
    );
  }
  
}

export default withStyles(styles)(Footer);
