import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from "../Header";
import Footer from "../Footer";
import { Link } from 'react-router-dom'
import styles from "./LandingPage.styles";
import {
  withStyles,
  Grid,
  IconButton
} from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";

class LandingPage extends Component {
  state = {
    tooltipOpen: false
  }
  closeTooltip(){
    this.setState({tooltipOpen: false})
  }
  openTooltip(){
    this.setState({tooltipOpen: true})
  }
  render() {
    const { classes } = this.props;

    return (
    <Grid>
        <Grid container justify="center" spacing={32}>
            <Grid item xs={12}>
                <Typography variant="h5" className={classes.subHeading}>One place to run deploy and test your application</Typography>
             </Grid>
             <Grid className={classes.topContainer} container justify="center" spacing={32}>
             <Grid item xs={6}>
              <Card className={classes.card}>
              <Grid
                className={classes.media}
              ></Grid>
              <CardContent className={classes.cardContent}>
              <Typography variant="h5" className={classes.cardTitle} color="textSecondary" gutterBottom>
                  New to devOps commons?
              </Typography>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Deploy your application using all the best practices & patterns
              </Typography>
              </CardContent>
              <CardActions>
              <Button className={classes.btnAction} variant="contained" color="primary">
                                <Link to='/quickStartPlatform'>Quick Start</Link>
                            </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
          <Card className={classes.cardfinal}>
              <Grid className={classes.mediaFinal}></Grid>
              <CardContent className={classes.cardContent}>
              <Typography variant="h5" className={classes.cardTitle} color="textSecondary" gutterBottom>
                  Familiar with Continuous Integration Environment?
              </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Use popular patterns (Github, Jenkins, Nexus, Urbancode deploy)
              </Typography>
              </CardContent>
              <CardActions>
              <Button className={classes.btnAction} variant="contained" color="primary">
                          <Link to='/practitioner'>Practitioner</Link>
              </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12}>
          <a className= {classes.compLink} onClick={this.openTooltip.bind(this)} href="javascript:void(0)" >
              Prerequisites
              <IconButton 
              className= {classes.compButton}
              color="primary"
              title="open prerequisites"
              rel="noopener noreferrer">
                <HelpIcon/>
            </IconButton>
            </a>
            {this.state.tooltipOpen && 
            <div className={classes.tooltipContent}>
              <a className = {classes.compLink} href="javascript:void(0)" onClick={this.closeTooltip.bind(this)}>X</a>
              <p>
                This is the tooltip content
              </p>
            </div>}
          </Grid>
          </Grid>
          <Grid item xs={12} className={classes.componentArea}>
              <Typography variant="h5" className={classes.compTitle} color="textSecondary">
                    DevOps patterns
              </Typography>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              Best practises, onboarding, template, deployment & test scripts - easily deployable on the local & cloud.
              </Typography>
              <Grid className={classes.componentTiles} container justify="center" spacing={32}>
                  <Grid item xs={2}>
                    <img className={classes.compImage} src="./static/images/pipeline.png" title = "./static/images/cloud_infra.png"/>
                    <Link className={classes.compLink} to='/practitioner'>Simplified Pipeline</Link>
                  </Grid>
                  <Grid item xs={2}>
                    <img className={classes.compImage} src="./static/images/cd.png" title = "./static/images/cloud_infra.png"/>
                    <Link className={classes.compLink} to='/'>Continuous Delivery</Link>
                  </Grid>
                  <Grid item xs={2}>
                    <img className={classes.compImage} src="./static/images/container.png" title = "./static/images/cloud_infra.png"/>
                    <Link className={classes.compLink} to='/'>Container Orchestration</Link>
                  </Grid>
                  <Grid item xs={2}>
                    <img className={classes.compImage} src="./static/images/microservices.png" title = "./static/images/cloud_infra.png"/>
                    <Link className={classes.compLink} to='/'>Microservices</Link>
                  </Grid>
                  <Grid item xs={2}>
                    <img className={classes.compImage} src="./static/images/cloud_infra.png" title = "./static/images/cloud_infra.png"/>
                    <Link className={classes.compLink} to='/'>Cloud & Infrastructure</Link>
                  </Grid>
                  <Grid item xs={2}>
                    <img className={classes.compImage} src="./static/images/bigdata.png" title = "./static/images/cloud_infra.png"/>
                    <Link className={classes.compLink} to='/'>Big Data</Link>
                  </Grid>
                  <Grid item xs={2}>
                    <img className={classes.compImage} src="./static/images/monitor.png" title = "./static/images/cloud_infra.png"/>
                    <Link className={classes.compLink} to='/'>Monitoring</Link>
                  </Grid>
                  <Grid item xs={2}>
                    <img className={classes.compImage} src="./static/images/settings.png" title = "./static/images/cloud_infra.png"/>
                    <Link className={classes.compLink} to='/'>Configuration Management</Link>
                  </Grid>
                  <Grid item xs={2}>
                    <img className={classes.compImage} src="./static/images/versioning.png" title = "./static/images/cloud_infra.png"/>
                    <Link className={classes.compLink} to='/'>Version Control</Link>
                  </Grid>
              </Grid>
          </Grid>
        </Grid>
  </Grid>
    );
  }
}

export default withStyles(styles)(LandingPage);
