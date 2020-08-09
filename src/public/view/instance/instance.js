import React from 'react';
import { connect } from 'react-redux';

class Instance extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {value,onPropAdd,onPropRemove} = this.props;
        return (
            <div>
                <div>
                    clicked:{value}times,
                    <button onClick={onPropAdd}>++</button>
                    <button onClick={onPropRemove}>--</button>
                    <Text text={value}><div>234</div></Text>
                </div>
            </div>
            
            
        )
    }
    componentDidMount(){
        this.componentDidUpdate();
    }
    componentDidUpdate(){
        console.log(window.location,456)
    }
}
class Text extends React.Component{
    render(){
        const {text,children} = this.props;
        return (
            <div>{text}<div id='dd'>{children}</div></div>
        )
    }
}

function mapStateToProps(state){
    return {
        value:state.count.num
    }
}

function mapDispatchToProps(dispatch){
    return{
        onPropAdd:()=>{dispatch({type:"+"})},
        onPropRemove:()=>{dispatch({type:"-"})}
    }
}
Instance = connect(mapStateToProps,mapDispatchToProps)(Instance)

export default Instance

