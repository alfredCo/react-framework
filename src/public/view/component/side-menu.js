import React from 'react';
import {NavLink} from 'react-router-dom'
import { withTranslation } from 'react-i18next'
class Menu extends React.Component{
    constructor(props){
        super(props);
        this.isOpen = this.props.open;
        this.keyword = this.props.item.keyword;
    }
    render(){
        let item = this.props.item;
        return(
            item.child.length>0?
            <div>
                <span onClick={this.changeFlag.bind(this)}>{item.text}</span>
                <i className="icon-arrow"></i>
            </div>
            :
            <NavLink to={item.href}>
                {item.text}
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
            this.state[item.keyword] = false;
        })
    }
    toggle(flag,keyword){
        console.log(flag,keyword);
        this.setState({[keyword]:flag});
        this.currentKey = keyword;
    }
    render(){
        let menuData = this.props.data;
        return(
            <ul className={`menu-level-${this.level}`}>
                {
                    menuData.map(item=>{
                        return (
                        <li key={item.id} className={this.state[this.currentKey]&&item.keyword==this.currentKey?'open':''}>
                            <Menu item={item} onEmit={this.toggle.bind(this)} open={this.state.flag}/>
                            {
                                item.child.length>0?<MenuGroup open={this.state.flag} data={item.child} level={this.level}/>:null
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

