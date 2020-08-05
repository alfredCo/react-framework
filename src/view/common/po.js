import React from 'react';


class Po extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {cc,dd} = this.props;
        return (
            <div>
                {cc}//<br/>{dd}
            </div>
            
            
        )
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

export default Po

