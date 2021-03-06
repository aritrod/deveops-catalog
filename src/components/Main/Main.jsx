import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from '../LandingPage'
import QuickStartQuestion from '../QuickStart/QuickStartQuestion'
import QuickStartSummary from '../QuickStart/QuickStartSummary'
import QuickStartPlatform from '../QuickStart/QuickStartPlatform'
import QuickStartConclusion from '../QuickStart/QuickStartConclusion'
import App from '../App'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/landing' component={LandingPage}/>
      <Route path='/quickStartQuestion' component={QuickStartQuestion}/>
      <Route path='/quickStartPlatform' component={QuickStartPlatform}/>
      <Route path='/quickStartConclusion' component={QuickStartConclusion}/>
      <Route path='/quickStartSummary' component={QuickStartSummary}/>
      <Route path='/practitioner' component={App}/>
      
      
    </Switch>
  </main>
)

export default Main