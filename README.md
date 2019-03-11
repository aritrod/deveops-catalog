<a href='https://jenkins-sharedlib.lbg.eu-gb.mybluemix.net/job/simplified-pipelines/job/pipeline-ui-catalog/job/master/'><img src='https://jenkins-sharedlib.lbg.eu-gb.mybluemix.net/buildStatus/icon?job=simplified-pipelines/pipeline-ui-catalog/master'></a>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pre-requisites

The application requires node version to be **8.6+** . You might need to export env variable, used for Jenkins builds, before executing below command.

`export WORKSPACE=$(pwd)`

## Available Scripts

In the project directory, you can run:

### `yarn` or `yarn install`

It will install dependencies to build the package

### `yarn build`

It executes the build lifecycle which includes scripts `prestart`, `prebuild` & `build`.

### Application deployment

As we produce the static artifact of the application, it is ready to be deployed on a web server to be served from browser. you may use. 

The application can be started locally with below command

### `npm start build`

If you are deploying on IBM Bluemix, you may use static buildpack to deploy the application.

### Current Setup

### Application

The application is currently being deployed and available from [link](https://devops-catalog.lbg.eu-gb.mybluemix.net/).

The staging version of application is available at [link](https://devops-catalog-staging.lbg.eu-gb.mybluemix.net/)

### CI

Jenkins job for the repository is avalable at [URL](https://jenkins-sharedlib.lbg.eu-gb.mybluemix.net/job/simplified-pipelines/job/pipeline-ui-catalog/).