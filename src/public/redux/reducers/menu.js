
const default_state = {
    num:10
}

const count = (state = default_state,action)=>{
    switch(action.type){
        case '+':
        return Object.assign({},state,{num:state.num + 1})
        case '-':
        return Object.assign({},state,{num:state.num - 1})
        default:
        return state
    }
}
export default count


