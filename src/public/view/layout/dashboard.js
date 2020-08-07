import React from 'react';
import { withTranslation } from 'react-i18next'
import {Route,Switch,useRouteMatch} from 'react-router-dom';
import SideMenu from '../component/side-menu'
import Header from './header'
import DashboardRoute from '../../route/dashboard-route'
import Resource from '../resource/resource'

class Dashboard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let menuData = [
            {
                href:"/dashboard/instance",
                text:"实例",
                id:1,
                keyword:'instance',
                child:[]
            },
            {
                href:"/cvm/volume",
                text:"云硬盘",
                id:2,
                keyword:'volume',
                child:[]
            },
            {
                href:"",
                text:"网络",
                id:5,
                keyword:'net',
                child:[
                    {
                        href:"/cvm/network",
                        text:"网络",
                        id:3,
                        keyword:'network',
                        child:[]
                    },
                    {
                        href:"/cvm/route",
                        text:"路由",
                        id:4,
                        keyword:'route',
                        child:[]
                    }
                ]
            }
        ]
        let { match } = this.props;
        return(
            <div>
                <Header/>
                <div className="main">
                    <aside><SideMenu data={menuData}/></aside>
                    <div className="main-content">
                        <DashboardRoute match={match}/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        value:state.countTwo.num
    }
}

function mapDispatchToProps(dispatch){
    return{
        onPropAdd:()=>{dispatch({type:"++"})},
        onPropRemove:()=>{dispatch({type:"--"})}
    }
}
//Po = connect(mapStateToProps,mapDispatchToProps)(Po)

export default Dashboard

