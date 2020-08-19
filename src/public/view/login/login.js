import React from 'react';
import { connect } from 'react-redux';
import { createHashHistory } from 'history';
import LoginApi from '@/public/api/login-api';
import { withTranslation } from 'react-i18next'
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            form:{
                enterpriseLoginName:"",
                userName:"",
                password:""
            },
            loginIng:false
        }
        this.history = createHashHistory();
    }
    render(){
        //const {value,onPropAdd,onPropRemove} = this.props;
        const {t} = this.props;
        const {loginIng,form} = this.state;
        return (
            <div className="login-page">
                <form className="login-form" noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <legend>{t('login.title')}</legend>
                    <div className="control-group">
                        <input type='text' name="enterpriseLoginName" placeholder={t('placeholder.enterpriseName')}  className="form-control" value={form.enterpriseLoginName||''} onChange={this.formChange.bind(this,'enterpriseLoginName')}/>
                    </div>
                    <div className="control-group">
                        <input type='text' name="userName" placeholder={t('placeholder.userName')}  className="form-control" value={form.userName||''} onChange={this.formChange.bind(this,'userName')}/>
                    </div>
                    <div className="control-group">
                        <input type='password' name="password" placeholder={t('placeholder.password')} className="form-control" value={form.password||''} onChange={this.formChange.bind(this,'password')}/>
                    </div>
                    <div className="btn-item">
                        <button className="btn btn-primary" disabled={loginIng} onClick={this.handleSubmit.bind(this)}>{t('btn.login')}</button>
                    </div>
                </form>
            </div>
        )
    }
    handleSubmit(e){
        event.preventDefault();
        this.setState({loginIng:true});
        LoginApi.login(this.state.form).then(res=>{
            console.log(res);
            if(res&&res.data){
                this.history.push('/dashboard/instance');
                localStorage.isLogin = 1;
            }
        }).finally(()=>{
            this.setState({loginIng:false});
        })
    }
    formChange(key,e){
        console.log(e.target.value);
        this.setState({"form":Object.assign({},this.state.form,{[key]:e.target.value})})
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
Login = withTranslation()(Login)
Login = connect(mapStateToProps,mapDispatchToProps)(Login)

export default Login

