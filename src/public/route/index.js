import React from 'react'
import {Route,HashRouter,Switch,Link,BrowserRouter as Router,} from 'react-router-dom'; 
import Dashboard from '../view/layout/dashboard'
import Login from '../view/login/login'


let Blank = ()=>{
  return (
    <div>
    <Link to="/dashboard">resource</Link>
    <Link to="/login/pagemanage">pagemanage</Link>
    </div>
    
  )
}

let app = ()=>{
  return(
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Blank}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/dashboard" children={({match,location}) =>{
            return (
                <div>
                    <Dashboard match={match} location={location}/>
                </div>
            )
        }}/>
      </Switch>
    </HashRouter>
  )
}

export default app