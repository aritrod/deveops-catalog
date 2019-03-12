import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from "../Header";
import { Link } from 'react-router-dom'

const styles = {
  card: {
    minWidth: 50,
    maxWidth: 300,
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
};

class LandingPage extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Header />
        <div style={{ textAlign: "center", margin: "1%" }}><h5>One place to run deploy and test your application</h5></div>
        <div>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Deploy your application using best practice and patterns
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"><Link to='/quickStart'>Quick Start</Link></Button>
            </CardActions>
          </Card>

          <Card className={classes.card}>
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
        <div style={{ textAlign: "center", margin: "1%" }}><a href="https://www.google.com/" target="blank"> Prerequisites</a>
          <p class="fa fa-question-circle"></p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);