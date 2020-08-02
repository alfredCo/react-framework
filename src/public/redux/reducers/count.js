const counts = {
    num:10
}
//const count = 10;
const count = (state = counts,action)=>{
    switch(action.type){
        case '++':
        return Object.assign({},state,{num:state.num + 2})
        case '--':
        return Object.assign({},state,{num:state.num - 2})
        default:
        return state
    }
}
export default count


