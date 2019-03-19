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
            email: ''
        }
        this.onChangePlatform = this.onChangePlatform.bind(this)
        this.onChangeProject = this.onChangeProject.bind(this)
        this.onChangeGHEOrg = this.onChangeGHEOrg.bind(this)
        this.onChangeGHEServiceUser = this.onChangeGHEServiceUser.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.provisionRequest = this.provisionRequest.bind(this)
    }

    onChangePlatform(e) {
        this.setState({
            platform: e.target.value
        })
    }

    onChangeProject(e) {
        this.setState({
            project: e.target.value
        })
    }

    onChangeGHEOrg(e) {
        this.setState({
            gheOrg: e.target.value
        })
    }

    onChangeGHEServiceUser(e) {
        this.setState({
            gheServiceUser: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

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

    onSubmit(event){
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
                                    <label style={{ marginTop: "1%" }}>Platform</label>
                                    <select onChange={this.onChangePlatform} value={this.state.platform} type="text" className="form-control" id="platform">
                                        <option value='1'>Please select your platform</option>
                                        <option value="sandbox">Sandbox</option>
                                        <option value="azure">Azure</option>
                                    </select>
                                    <label style={{ marginTop: "1%" }}>Cluster Size</label>
                                    <select onChange={this.onChangePlatform} value={this.state.cluster} type="text" className="form-control" id="platform">
                                        <option value='1'>Please select your cluster size</option>
                                        <option value="3">3</option>
                                        <option value="7">7</option>
                                        <option value="9">9</option>
                                    </select>
                                    <label style={{ marginTop: "1%" }}>Project name/resource group name</label>
                                    <input required onChange={this.onChangeProject} value={this.state.project} type="text" className="form-control" id="project" placeholder="Please add the name you want to use to group your resources" />
                                    <label style={{ marginTop: "1%" }}>Cost centre code</label>
                                    <input required onChange={this.onChangeProject} value={this.state.project} type="text" className="form-control" id="project" placeholder="Please add the cost centre that will be charged" />
                                    <label style={{ marginTop: "1%" }}>Github Enterprise Org name</label>
                                    <input required onChange={this.onChangeGHEOrg} value={this.state.gheOrg} type="text" className="form-control" id="gheorg" placeholder="Please add your Github Organization" />
                                    <label style={{ marginTop: "1%" }}>Github Enterprise access token</label>
                                    <input required onChange={this.onChangeGHEServiceUser} value={this.state.gheServiceUser} type="text" className="form-control" id="gheservice" placeholder="Please add the token that can be used to create and commit to a repository" />
                                    <label style={{ marginTop: "1%" }}>Resource owner</label>
                                    <input required onChange={this.onChangeEmail} value={this.state.email} type="text" className="form-control" id="email" placeholder="Please add the email address of the owner of the resources" />
                                    <label style={{ marginTop: "1%" }}>Select tooling</label><br></br>
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