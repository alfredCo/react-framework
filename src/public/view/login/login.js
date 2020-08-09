import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            password:""
        }
    }
    render(){
        //const {value,onPropAdd,onPropRemove} = this.props;
        return (
            <div>
                <form>
                    <div className="control-group">
                        <input type='text' name="name" className="form-control" value={this.state.name} onChange={this.nameChange.bind(this)}/>
                    </div>
                    <div className="control-group">
                        <input type='password' name="password" className="form-control" value={this.state.password} onChange={this.passwordChange.bind(this)}/>
                    </div>
                    <div className="btn-item">
                        <button className="btn btn-primary" onClick={this.submit.bind(this)}>登录</button>
                    </div>
                </form>
            </div>
        )
    }
    submit(e){
        console.log(e.target.value);
    }
    nameChange(e){
        console.log(e.target.value);
        this.setState({name:e.target.value})
    }
    passwordChange(e){
        console.log(e.target.value);
    }
    componentDidMount(){
        //this.componentDidUpdate();
    }
    componentDidUpdate(){
        //console.log(window.location,456)
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
Login = connect(mapStateToProps,mapDispatchToProps)(Login)

export default Login

