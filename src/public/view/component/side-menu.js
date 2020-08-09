import React from 'react';
import {NavLink,Link} from 'react-router-dom'
import { withTranslation } from 'react-i18next'
class Menu extends React.Component{
    constructor(props){
        super(props);
        this.isOpen = this.props.open;
        this.keyword = this.props.item.state.keyword;
    }
    render(){
        let item = this.props.item;
        return(
            item.child.length>0?
            <div className="sub-menu">
                <span className="text" onClick={this.changeFlag.bind(this)}>
                    {item.icon?<i className={item.icon}></i>:""}
                    {item.text}
                </span>
                <i className="icon-arrow"></i>
            </div>
            :
            <NavLink to={item} className="sub-menu">
                <span className="text">
                    {item.icon?<i className={item.icon}></i>:""}
                    {item.text}
                </span>
            </NavLink>
        )
    }
    changeFlag(){
        this.isOpen = !this.isOpen;
        this.props.onEmit(this.isOpen,this.keyword);
    }
}

class MenuGroup extends React.Component{
    constructor(props){
        super(props);
        this.level = this.props.level?this.props.level:0
        this.level+=1;
        this.state = {};
        this.props.data.forEach(item=>{
            if(item.child.length>0){
                this.state[item.state.keyword] = this.props.openKey[item.state.keyword];
                //this.state[item.state.keyword]?this.currentKey = item.state.keyword:'';
            }
        });
    }
    toggle(flag,keyword){
        this.setState({[keyword]:flag});
        //this.currentKey = keyword;
    }
    
    render(){
        let menuData = this.props.data;
        return(
            <ul className={`menu-level-${this.level}`}>
                {
                    menuData.map(item=>{
                        return (
                        <li key={item.id} className={this.state[item.state.keyword]?'open':''}>
                            <Menu item={item} onEmit={this.toggle.bind(this)} open={this.state[item.state.keyword]}/>
                            {
                                item.child.length>0?<MenuGroup openKey={this.props.openKey} data={item.child} level={this.level}/>:null
                            }
                        </li>)
                    })
                }
                
            </ul>
        )
    }
}

class SideMenu extends React.Component{
    constructor(props){
        super(props);
        console.log(props.location);
        this.openKey = this.getOpenKey(props.data,props.location.pathname);
    }
    componentDidMount(){
        this.componentDidUpdate();
    }
    componentDidUpdate(){
        console.log(this.openKey)
    }
    getOpenKey(data,key){
        let current = {};
        for(let i=0;i<data.length;i++){
            if(data[i].child.length>0){
                current = Object.assign({},current,this.getOpenKey(data[i].child,key));
                if(current[data[i].state.keyword]&&data[i].state.parent){
                    current[data[i].state.parent] = true;
                }
            }else{
                if(data[i].pathname===key){
                    data[i].state.parent?current[data[i].state.parent] = true:'';
                }
            }
        }
        return current;
    }
    render(){
        let menuData = this.props.data;
        return(
            <MenuGroup data={menuData} openKey={this.openKey}/>
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

export default SideMenu

