import React from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Academy from './pages/news/Academy'
import BreakingNewsAlerts from './pages/news/BreakingNewsAlerts'
import Club from './pages/news/Club'
import InjuriesAndSuspensions from './pages/news/InjuriesAndSuspensions'
import Latest from './pages/news/Latest'
import NewsMen from './pages/news/Men'
import NewsWomen from './pages/news/Women'
import NewsUnder23s from './pages/news/Under23s'
import NewsUnder18s from './pages/news/Under18s'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Layout>
     <Switch>
      <Route path="/news/academy" exact render={(props)=><Academy {...props}/>}/>  
      <Route path="/news/breakingNewsAlerts" exact render={(props)=><BreakingNewsAlerts {...props}/>}/>  
      <Route path="/news/club" exact render={(props)=><Club {...props}/>}/>  
      <Route path="/news/injuriesAndSuspensions" exact render={(props)=><InjuriesAndSuspensions {...props}/>}/>  
      <Route path="/news/latest" exact render={(props)=><Latest {...props}/>}/>  
      <Route path="/news/men" exact render={(props)=><NewsMen {...props}/>}/>  
      <Route path="/news/women" exact render={(props)=><NewsWomen {...props}/>}/>  
      <Route path="/news/under23s" exact render={(props)=><NewsUnder23s {...props}/>}/>  
      <Route path="/news/under18s" exact render={(props)=><NewsUnder18s {...props}/>}/> 
      <Route path="/" exact render={(props)=><Home {...props}/>}/>  
      </Switch>
      </Layout>
    </Router>
  )
}

export default App
