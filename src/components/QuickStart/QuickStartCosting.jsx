import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Footer from "../Footer";
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  card: {
    minWidth: 50,
    maxWidth: 300,
    marginLeft: '2%',
    marginTop: '2%',
    textAlign: 'center'
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
    height: 40,
  },
});

const clusterSizes = [
  {
    value: '3',
    label: '3',
  },
  {
    value: '7',
    label: '7',
  },
  {
    value: '9',
    label: '9',
  },
];

class QuickStartCosting extends Component {
  state = {
    platform: 'ALF on Azure',
    project: 'Horizontal Scaling',
    clusterSize: '3',
    gheOrg: 'defaultOrg',
    gheService: 'defaultUser',
    email: 'default@publicissapient.com'
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="outlined-name"
              label="Platform"
              className={classes.textField}
              value={this.state.platform}
              onChange={this.handleChange('platform')}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-name"
              label="Project"
              className={classes.textField}
              value={this.state.project}
              onChange={this.handleChange('project')}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-name"
              label="GHE Organization"
              className={classes.textField}
              value={this.state.gheOrg}
              onChange={this.handleChange('gheOrg')}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-name"
              label="GHE Service user"
              className={classes.textField}
              value={this.state.gheService}
              onChange={this.handleChange('gheService')}
              margin="normal"
              variant="outlined"
            />

            <TextField
              id="outlined-email-input"
              label="Email"
              className={classes.textField}
              type="email"
              name="email"
              value={this.state.email}
              autoComplete="email"
              margin="normal"
              variant="outlined"
            />

            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              className={classes.textField}
              value={this.state.clusterSize}
              onChange={this.handleChange('clusterSize')}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Please select your cluster size"
              margin="normal"
              variant="outlined"
            >
              {clusterSizes.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </form>
        </div>
        <div className="row">
        <div className="col-md-3"> 
          <Card className={classes.card}>
            <CardContent>
              <img
                src="./static/images/large.png"
                alt="Cloud and infrastructure"
                height="80" width="80"
              /><br></br>
              <p style={{ fontWeight: "bold" }}>Large</p>
              <p>vCPU: 8</p>
              <p>Memory: 16GB</p>
              <p style={{ backgroundColor: "lightgreen" }}>£250/Month</p>
            </CardContent>

            <CardActions>
              <Button size="small" style={{ textAlign: "center" }}><Link to='/quickStartConclusion'>Accept</Link></Button>
            </CardActions>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className={classes.card}>
            <CardContent>
              <img
                src="./static/images/medium.png"
                alt="Cloud and infrastructure"
                height="80" width="80"
              /><br></br>
              <p style={{ fontWeight: "bold" }}>Medium</p>
              <p>vCPU: 4</p>
              <p>Memory: 8GB</p>
              <p style={{ backgroundColor: "lightgreen" }}>£200/Month</p>
            </CardContent>

            <CardActions>
              <Button size="small" style={{ textAlign: "center" }}><Link to='/quickStartConclusion'>Accept</Link></Button>
            </CardActions>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className={classes.card}>
            <CardContent>
              <img
                src="./static/images/small.png"
                alt="Cloud and infrastructure"
                height="80" width="80"
              /><br></br>
              <p style={{ fontWeight: "bold" }}>Small</p>
              <p>vCPU: 2</p>
              <p>Memory: 4GB</p>
              <p style={{ backgroundColor: "lightgreen" }}>£150/Month</p>
            </CardContent>

            <CardActions>
              <Button size="small" style={{ textAlign: "center" }}><Link to='/quickStartConclusion'>Accept</Link></Button>
            </CardActions>
          </Card>
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}

QuickStartCosting.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuickStartCosting);
