import React, { Component } from 'react';
import Header from "../Header";
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import styles from './QuickStart.styles';

class QuickStartQuestion extends Component {
    constructor() {
        super()
        this.state = {
            successMessage: '',
            errorMessage: '',
            platform: '1',
            project: '',
            gheOrg: '',
            gheServiceUser: '',
            email: '',
            expiryDate: new Date(),
            costCentre: ''
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    isEmpty(value) {
        return (null == value || '' === value || '' === value || undefined === value) ? true : false;
    }

    provisionRequest(platform, project, gheOrg, gheService, email) {
        if (!this.isEmpty(platform) && !this.isEmpty(project) && !this.isEmpty(gheOrg)) {
            //TODO
        } else {
            this.setState({
                errorMessage: 'Please make sure to fill in all details!',
                successMessage: ''
            });
        }
    }

    onSubmit(event) {
        event.preventDefault();
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)} action="/quickStartSummary">
                    {/* <Header /> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
                                <div className="form-group row">
                                    <div className="col-sm-10">

                                        <span style={{ color: "GREEN" }}>{this.state.successMessage}</span>
                                        <span style={{ color: "RED" }}>{this.state.errorMessage}</span><br></br>
                                        
                                        <label style={{ marginTop: "1%" }}>Project name / Resource group name</label>
                                        <input required onChange={this.handleChange('project')} value={this.state.project} type="text" className="form-control" id="project" placeholder="Please add the name you want to use to group your resources" />
                                        <label style={{ marginTop: "1%" }}>Cost centre code</label>
                                        <input required onChange={this.handleChange('costCentre')} value={this.state.costCentre} type="text" className="form-control" id="costCentre" placeholder="Please add the cost centre that will be charged" />
                                        <label style={{ marginTop: "1%" }}>Resource owner</label>
                                        <input required onChange={this.handleChange('email')} value={this.state.email} type="text" className="form-control" id="email" placeholder="Please add the email address of the owner of the resources" />
                                        <label style={{ marginTop: "1%" }}>Resource expiration date (when will these resources no longer be needed)</label>
                                        <input required onChange={this.handleChange('expiryDate')} value={this.state.expiryDate} type="date" className="form-control" id="expireDate" />
                                        <label style={{ marginTop: "1%" }}>Github Enterprise Org name</label>
                                        <input required onChange={this.handleChange('gheOrg')} value={this.state.gheOrg} type="text" className="form-control" id="gheorg" placeholder="Please add your Github Organization" />
                                        <label style={{ marginTop: "1%" }}>Github Enterprise access token</label>
                                        <input required onChange={this.handleChange('gheServiceUser')} value={this.state.gheServiceUser} type="text" className="form-control" id="gheservice" placeholder="Please add the token that can be used to create and commit to a repository" />
                                        <label style={{ marginTop: "1%" }}>Additional Tooling needed</label><br></br>
                                        <input type="checkbox" name="jenkins" value="1" /> Jenkins<br></br>
                                        <input type="checkbox" name="nexus" value="2" /> NexusIQ<br></br>
                                        <input type="checkbox" name="docker" value="2" /> Docker Registry<br></br>
                                        <input type="checkbox" name="sonar" value="3" disabled /> Sonar<br></br>
                                        <input type="checkbox" name="speedy" value="4" disabled /> Speedy<br></br>
                                        <input type="checkbox" name="monitoring" value="5" disabled /> Monitoring<br></br>
                                        <div style={{ marginTop: "1%" }}>
                                            <Button className={classes.btnSelect} variant="contained" color="primary">
                                                <Link to='/quickStartSummary'>Submit</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(QuickStartQuestion);