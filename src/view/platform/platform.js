import React from 'react';
import { connect } from 'react-redux';
import Po from './po'
import { withTranslation } from 'react-i18next'
import i18n from 'i18next';
import { createHashHistory,createBrowserHistory } from 'history';
import { withRouter } from 'react-router-dom';
class Reducc extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lang:'zh'
        }
        this.langg = 'zh';
    }
    render(){
        const {value,onPropAdd,onPropRemove,t} = this.props;
        //const { t ,i18n} = useTranslation();
        console.log(t('title'));
        console.log(t('abc',{number:100}));
        console.log(this.state.lang,'render');
        return (
            <div>
                {t('title')}
                platform
                <div>
                    clicked:{value}times,
                    <button onClick={onPropAdd}>++</button>
                    <button onClick={onPropRemove}>--</button>
                    <Text text={value}><div>234</div></Text>
                </div>
                <Po cc={value} dd={this.langg}/>
                <button onClick={this.changeLang.bind(this)}>切换{this.langg}</button>
                {this.state.lang}
                <button onClick={this.goto.bind(this)}>跳转</button>
            </div>
        )
    }
    updateLang(state,props){
        return{
            lang:state.lang=='en'?'zh':'en'
        }
    }
    goto(){
        let history = createHashHistory();
        //history.push('/resource/resourceview');
        this.props.history.push('/resource/resourceview');
    }
    changeLang(){
        this.setState(this.updateLang,()=>{
            i18n.changeLanguage(this.state.lang);
        })
        this.langg=='en'?this.langg='zh':this.langg='en';
        //i18n.changeLanguage(this.langg);
    }
    componentDidUpdate(){
        console.log(this.state.lang);
    }
}
function Reduc(props){
// class Reduc extends React.Component{
    // render(){
    //     //const { t ,i18n} = useTranslation();
    //     return (
    //         <div>
    //             fffff
                
    //         </div>
    //     ) 
    // }
    const {value,onPropAdd,onPropRemove} = props;
    const { t ,i18n} = useTranslation();
    console.log(t('title'));
    return (
        <div>
            platform
            
            <div>
                clicked:{value}times,
                <button onClick={onPropAdd}>++</button>
                <button onClick={onPropRemove}>--</button>
                <Text text={value}><div>234</div></Text>
            </div>
            <Po cc={value}/>
        </div>
    )
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
Reducc = withRouter(Reducc)
Reducc = withTranslation()(Reducc)
//Reduc = connect(mapStateToProps,mapDispatchToProps)(ccc);
Reducc = connect(mapStateToProps,mapDispatchToProps)(Reducc);
export default Reducc;




