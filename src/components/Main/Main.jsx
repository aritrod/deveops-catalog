import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from '../LandingPage'
import QuickStart from '../QuickStart'
import QuickStartSummary from '../QuickStart/QuickStartSummary'
import App from '../App'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/landing' component={LandingPage}/>
      <Route path='/quickStart' component={QuickStart}/>
      <Route path='/practitioner' component={App}/>
      <Route path='/summary' component={QuickStartSummary}/>
    </Switch>
  </main>
)

export default Main