import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from '../LandingPage'
import QuickStartQuestion from '../QuickStart/QuickStartQuestion'
import QuickStartSummary from '../QuickStart/QuickStartSummary'
import QuickStartPlatform from '../QuickStart/QuickStartPlatform'
import QuickStartConclusion from '../QuickStart/QuickStartConclusion'
import Practitioner from '../Practitioner'
import Header from "../Header";
import Footer from "../Footer";
import { Provider } from 'react-redux';
import store from '../../store/ucd-ci-store.js';
import theme from "../../theme";

import {
  MuiThemeProvider
  } from "@material-ui/core";

const Main = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
    <main>
  <Header />
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/landing' component={LandingPage}/>
      <Route path='/quickStartQuestion' component={QuickStartQuestion}/>
      <Route path='/quickStartPlatform' component={QuickStartPlatform}/>
      <Route path='/quickStartConclusion' component={QuickStartConclusion}/>
      <Route path='/quickStartSummary' component={QuickStartSummary}/>
    <Route path='/practitioner' component={Practitioner}/>
    </Switch>
    <Footer />
  </main>
    </MuiThemeProvider>
  </Provider>
)

export default Main