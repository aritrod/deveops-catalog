import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Header from "../Header";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
  withStyles,
  MuiThemeProvider
} from "@material-ui/core";
import styles from "./LandingPage.styles";
import App from "../App";

const ITEM_HEIGHT = 48;

const gitHubList = [
  'OAuth',
  'Onboarding',
  'Teams and Controls',
  'Clearcase Migration'
];

const containerList = [
  'Self Service',
  'Onboarding',
  'Developer tooling catalog',
  'K8s/Rancher'
];

class LandingPage extends Component {
  state = {
    anchorEl: null,
    showCatalog: false
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null , showCatalog: true});
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <Header />
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu1' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Github
        </IconButton>
        <Menu
          id="long-menu1"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {gitHubList.map(option => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>

        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu2' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Container
        </IconButton>
        <Menu
          id="long-menu2"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {containerList.map(option => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
        <br></br>
        {this.state.showCatalog ? (
        <App/> ): (
          <span>No catalog selected</span>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
