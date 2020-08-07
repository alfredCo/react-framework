import React from 'react';


class Po extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cc:this.props.cc
        }
    }
    change(){
        this.cc+=4;
        this.setState({cc:this.state.cc+4})
    }
    render(){
        const {cc,dd} = this.props;
        return (
            <div onClick={this.change.bind(this)}>
                {this.state.cc}//<br/>{dd}
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

