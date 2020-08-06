import React from 'react'
import {Route,Switch} from 'react-router-dom';
import Resource from '../view/resource/resource' 

let app = (props)=>{
    let { match } = props;
    return(
    <div>
        <Switch>
            <Route path={`${match.path}/instance`} component={Resource}></Route>
        </Switch>
    </div>
    )
}

export default app