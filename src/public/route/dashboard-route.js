import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom';
import Resource from '../view/resource/resource'
import Instance from '../view/instance/instance'
import Volume from '../view/volume/volume'
import NetSwitch from '../view/switch/switch'
import NetRoute from '../view/route/route'
const menuList = [
    {
        path:"/dashboard/instance",
        component:Instance,
        keyword:"instance"
    },
    {
        path:"/dashboard/volume",
        component:Volume,
        keyword:"volume"
    },
    {
        path:"/dashboard/netswitch",
        component:NetSwitch,
        keyword:"netswitch"
    },
    {
        path:"/dashboard/netroute",
        component:NetRoute,
        keyword:"netroute"
    }
]

let app = (props)=>{
    return(
        <Switch>
            {
                menuList.map(item=>(
                    <Route path={item.path} key={item.keyword} children={({match,location}) =>{
                        return (
                            <item.component match={match}/>
                        )
                    }}>
                    </Route>
                ))
            }
            <Redirect to={`/dashboard/cvm/instance`} />
        </Switch>
    )
}

export default app