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
        this.state = {
            openKey:"",
            curMenuKey:""
        }
        this.menuData = [
            {
                pathname:"/dashboard/cvm/instance",
                text:"实例",
                icon:'icon-aw-jqm',
                id:1,
                state:{
                    keyword:'instance'
                },
                child:[]
            },
            {
                pathname:"/dashboard/cvm/volume",
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
                        pathname:"/dashboard/network/switch",
                        text:"网络",
                        id:3,
                        state:{
                            keyword:'switch',
                            parent:'network'
                        },
                        child:[]
                    },
                    {
                        pathname:"",
                        text:"路由",
                        id:4,
                        state:{
                            keyword:'route',
                            parent:'network'
                        },
                        child:[
                            {
                                pathname:"/dashboard/network/route/aa",
                                text:"aa",
                                id:6,
                                state:{
                                    keyword:'aa',
                                    parent:'route'
                                },
                                child:[]
                            },
                            {
                                pathname:"/dashboard/network/route/bb",
                                text:"bb",
                                id:7,
                                state:{
                                    keyword:'bb',
                                    parent:'route'
                                },
                                child:[]
                            }
                        ]
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
        //let ddd = this.getOpenKey(this.menuData,this.props.location.pathname,null);
        //this.setState({openKey:ddd});
    }
    render(){
        return(
            <div>
                <Header/>
                <div className="main">
                    <aside><SideMenu data={this.menuData} location={this.props.location}/></aside>
                    <div className="main-content">
                        <MenuTitle curMenuKey={this.state.curMenuKey}/>
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

