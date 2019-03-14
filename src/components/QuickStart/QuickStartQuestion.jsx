import React, { Component } from 'react';
import Header from "../Header";
import { Link } from 'react-router-dom'

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

    render() {
        return (
            <div> <Header />
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
                                    <label style={{ marginTop: "1%" }}>Project</label>
                                    <input onChange={this.onChangeProject} value={this.state.project} type="text" className="form-control" id="project" placeholder="Please add your project" />
                                    <label style={{ marginTop: "1%" }}>Github Enterprise Org</label>
                                    <input onChange={this.onChangeGHEOrg} value={this.state.gheOrg} type="text" className="form-control" id="gheorg" placeholder="Please add your Github Organization" />
                                    <label style={{ marginTop: "1%" }}>Github Enterprise service user</label>
                                    <input onChange={this.onChangeGHEService} value={this.state.gheServiceUser} type="text" className="form-control" id="gheservice" placeholder="Please add your service user" />
                                    <label style={{ marginTop: "1%" }}>Email id (requestor)</label>
                                    <input onChange={this.onChangeEmail} value={this.state.email} type="text" className="form-control" id="email" placeholder="Please add your organization email" />
                                    <label style={{ marginTop: "1%" }}>Select tooling</label><br></br>
                                    <input type="checkbox" name="jenkins" value="1"/> Jenkins<br></br>
                                    <input type="checkbox" name="nexus" value="2"/> Nexus<br></br>
                                    <input type="checkbox" name="docker" value="2"/> Docker<br></br>
                                    <input type="checkbox" name="sonar" value="3" disabled/> Sonar<br></br>
                                    <input type="checkbox" name="chef" value="4" disabled/> Chef<br></br>
                                    <input type="checkbox" name="monitoring" value="5" disabled/> Monitoring<br></br>
                                    <div style={{ marginTop: "1%" }}>
                                    <Link to='/summary'>Submit</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuickStartQuestion;