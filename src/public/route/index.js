import React from 'react'
import {Route,HashRouter,Switch} from 'react-router-dom'; 
import Dashboard from '../view/layout/dashboard'
import Login from '../view/login/login'


let app = ()=>{
  return(
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Login}></Route>
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