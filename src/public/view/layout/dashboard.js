import React from 'react';
import { withTranslation } from 'react-i18next'
import {Route,Switch,useRouteMatch} from 'react-router-dom';
import SideMenu from '../component/side-menu'
import MenuTitle from '../component/menu-title'
import Header from './header'
import DashboardRoute from '../../route/dashboard-route'
import Resource from '../resource/resource'

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        
        this.menuData = [
            {
                pathname:"/dashboard/instance",
                text:"实例",
                icon:'icon-aw-jqm',
                id:1,
                state:{
                    keyword:'instance'
                },
                child:[]
            },
            {
                pathname:"/dashboard/volume",
                text:"云硬盘",
                icon:'icon-aw-jqm',
                id:2,
                state:{
                    keyword:'volume'
                },
                child:[]
            },
            {
                pathname:"",
                text:"网络",
                icon:'icon-aw-jqm',
                id:5,
                state:{
                    keyword:'network'
                },
                child:[
                    {
                        pathname:"/dashboard/netswitch",
                        text:"网络",
                        id:3,
                        state:{
                            keyword:'netswitch',
                            parent:'network'
                        },
                        child:[]
                    },
                    {
                        pathname:"/dashboard/netroute",
                        text:"路由",
                        id:4,
                        state:{
                            keyword:'netroute',
                            parent:'network'
                        },
                        child:[]
                    },
                    {
                        pathname:"/dashboard/netroute/ooo",
                        text:"路由详情",
                        id:9,
                        state:{
                            keyword:'netroute',
                            parent:'network'
                        },
                        child:[]
                    }
                ]
            }
        ]
    }
    
    componentDidMount(){
        this.componentDidUpdate();
    }
    componentDidUpdate(){
        console.log(this.props.location);
    }
    render(){
        return(
            <div>
                <Header/>
                <div className="main">
                    <aside><SideMenu data={this.menuData} location={this.props.location}/></aside>
                    <div className="main-content">
                        <MenuTitle curMenuKey={this.props.match}/>
                        <DashboardRoute/>
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

