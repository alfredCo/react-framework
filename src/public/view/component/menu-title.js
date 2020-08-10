import React from 'react';
import {NavLink} from 'react-router-dom'
import { withTranslation } from 'react-i18next'

class MentTitle extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        let {t,curMenuKey} = this.props;
        return(
            <div>
                {curMenuKey.path}--{t(curMenuKey.path)}
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
MentTitle = withTranslation()(MentTitle)

export default MentTitle

