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
import QuestionAnswer from "@material-ui/icons/QuestionAnswer";

class LandingPage extends Component {

  render() {
    const { classes } = this.props;

    return (
    <Grid>
        <Grid container justify="center" spacing={32}>
            <Grid item xs={12}>
                <Typography variant="h5" className={classes.subHeading}>One stop shop to run, deploy and test your application</Typography>
             </Grid>
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
          {/* <Grid item xs={12}>
          <a href="#" >
              Prerequisites
              <IconButton 
              color="primary"
              title="Click to read the help document of this component"
              target="_blank"
              rel="noopener noreferrer">
                <QuestionAnswer/>
            </IconButton>
            </a>
          </Grid> */}

          <Grid item xs={12} className={classes.componentArea}>
              <Typography variant="h5" className={classes.compTitle} color="textSecondary">
                    DevOps patterns
              </Typography>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              Best practises, onboarding, template, deployment & test scripts - easily deployable on the local & cloud.
              </Typography>
              <Grid className={classes.componentTiles} container justify="center" spacing={32}>
                  <Grid item xs={2}>
                    <img className={classes.compImage} src="./static/images/footer_pipeline.png" title = "./static/images/cloud_infra.png"/>
                    <Link className={classes.compLink} to='/practitioner'>Simplified Pipeline</Link>
                  </Grid>
                  <Grid item xs={2}>
                    <img className={classes.compImage} src="./static/images/footer_cd.png" title = "./static/images/cloud_infra.png"/>
                    <Link className={classes.compLink} to='/'>Continuous Delivery</Link>
                  </Grid>
                  <Grid item xs={2}>
                    <img className={classes.compImage} src="./static/images/footer_container.png" title = "./static/images/cloud_infra.png"/>
                    <Link className={classes.compLink} to='/'>Container Orchestration</Link>
                  </Grid>
                  <Grid item xs={2}>
                    <img className={classes.compImage} src="./static/images/footer_microservice.png" title = "./static/images/cloud_infra.png"/>
                    <Link className={classes.compLink} to='/'>Microservices</Link>
                  </Grid>
                  <Grid item xs={2}>
                    <img className={classes.compImage} src="./static/images/footer_cloud_infra.png" title = "./static/images/cloud_infra.png"/>
                    <Link className={classes.compLink} to='/'>Cloud & Infrastructure</Link>
                  </Grid>
                  <Grid item xs={2}>
                    <img className={classes.compImage} src="./static/images/footer_bigdata.png" title = "./static/images/cloud_infra.png"/>
                    <Link className={classes.compLink} to='/'>Big Data</Link>
                  </Grid>
                  <Grid item xs={2}>
                    <img className={classes.compImage} src="./static/images/footer_monitoring.png" title = "./static/images/cloud_infra.png"/>
                    <Link className={classes.compLink} to='/'>Monitoring</Link>
                  </Grid>
                  <Grid item xs={2}>
                    <img className={classes.compImage} src="./static/images/footer_cm.png" title = "./static/images/cloud_infra.png"/>
                    <Link className={classes.compLink} to='/'>Configuration Management</Link>
                  </Grid>
                  <Grid item xs={2}>
                    <img className={classes.compImage} src="./static/images/footer_versioning.png" title = "./static/images/cloud_infra.png"/>
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
