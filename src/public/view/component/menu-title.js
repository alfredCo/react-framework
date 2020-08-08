import React from 'react';
import {NavLink} from 'react-router-dom'
import { withTranslation } from 'react-i18next'

class MentTitle extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        let {curKey,t} = this.props;
        return(
            <div>
                {curKey}--{t(curKey)}
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

