import React from 'react';
import {NavLink} from 'react-router-dom'
import { withTranslation } from 'react-i18next'
class Menu extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let item = this.props.item;
        return(
            item.child.length>0?
            <span>{item.text}</span>
            :
            <NavLink to={item.href}>
                {item.text}
            </NavLink>
        )
    }
}

class MenuGroup extends React.Component{
    constructor(props){
        super(props);
        this.level = this.props.level?this.props.level:0
        this.level+=1;
    }
    render(){
        let menuData = this.props.data;
        return(
            <ul className={`menu-level-${this.level}`}>
                {
                    menuData.map(item=>{
                        return (<li key={item.id}>
                            <Menu item={item}/>
                            {
                                item.child.length>0?<MenuGroup data={item.child} level={this.level}/>:null
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
    }
    render(){
        let menuData = this.props.data;
        return(
            <MenuGroup data={menuData}/>
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

