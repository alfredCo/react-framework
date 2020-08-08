import React from 'react'
import {Route,HashRouter,Switch,Link,BrowserRouter as Router,} from 'react-router-dom';
import Resource from '../view/resource/resource' 
import Platform from '../view/platform/platform' 
import Dashboard from '../view/layout/dashboard'


let Home = ()=>{
  return (
    <div>Home</div>
  )
}
let blank = ()=>{
  return (
    <div>
    <Link to="/dashboard">resource</Link>
    <Link to="/login/pagemanage">pagemanage</Link>
    </div>
    
  )
}

class Login extends React.Component{
  render(){
    return (
      <div>
        <Link to="/login/resource">resource</Link>
        <Link to="/login/pagemanage">pagemanage</Link>
        <Route path="/login/resource" component={Resource}/>
        <Route path="/login/pagemanage" component={Platform}/>
      </div>
    )
  }
}



let app = ()=>{
  return(
    <HashRouter>
      <Switch>
        <Route path="/" exact component={blank}></Route>
        <Route path="/login" exact component={Login}></Route>
        {/* <Route path="/dashbaord/instance" component={Resource}></Route> */}
        <Route path="/dashboard" children={({match,location}) =>{
          return (
            <Dashboard match={match} location={location}/>
          )
        }}/>
        <Route exact path="/resource/resourceview" component={Resource}/>
        <Route path="/pagemanage/platform" component={Platform}/>
      </Switch>
    </HashRouter>
  )
}

export default app