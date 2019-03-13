import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from "../Header";
import Footer from "../Footer";
import { Link } from 'react-router-dom'

const styles = {
  card: {
    minWidth: 50,
    maxWidth: 500,
    marginLeft: '5%',
    marginTop: '2%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 170,
  },
};

class LandingPage extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Header />
        <div style={{ textAlign: "center", margin: "1%" }}><h5>One place to run deploy and test your application</h5></div>
        <div class="row col-sm-8">
          <div class="col-sm-4">
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="./static/images/quickstart.jpeg"
                title="kubernetes_azure"
              />
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Deploy your application using best practice and patterns
              </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"><Link to='/quickStartPlatform'>Quick Start</Link></Button>
              </CardActions>
            </Card>
          </div>
          <div class="col-sm-4">
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="./static/images/devopsNew.jpeg"
                title="kubernetes_azure"
              />
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Using existing patterns : Github, Jenkins, Chef, Ansible
              </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"><Link to='/practitioner'>Practitioner</Link></Button>
              </CardActions>
            </Card>
          </div>
        </div>
        <div style={{ marginLeft: "2%", marginTop: "1%" }}><a href="https://www.google.com/" target="blank"> Prerequisites</a>
          <p class="fa fa-question-circle"></p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);