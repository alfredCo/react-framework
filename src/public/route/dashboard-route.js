import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom';
import Resource from '../view/resource/resource'

const menuList = [
    {
        path:"/dashboard/cvm/instance",
        component:Resource,
        keyword:"instance",
        parent:""
    },
    {
        path:"/dashboard/cvm/volume",
        component:Resource,
        keyword:"volume",
        parent:""
    },
    {
        path:"/dashboard/network/switch",
        component:Resource,
        keyword:"switch",
        parent:"network"
    },
    {
        path:"/dashboard/network/route",
        component:Resource,
        keyword:"route",
        parent:"network"
    }
]

let app = (props)=>{
    return(
        <Switch>
            {
                menuList.map(item=>(
                    <Route path={item.path} key={item.keyword} children={({match,location}) =>{
                        console.log(match,location)
                        if(match.path==item.path){
                            //console.log('current',item.keyword,item.parent);
                            //props.onEmit(item);
                        }
                        return (
                            <item.component match={match}/>
                        )
                    }}/>
                ))
            }
            <Redirect to={`/dashboard/cvm/instance`} />
        </Switch>
    )
}

export default app