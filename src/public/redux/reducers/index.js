import { combineReducers } from 'redux'
import count from "./menu"
import countTwo from "./count"

const allReducers = {
    count,
    countTwo
}
const rootReducers = combineReducers(allReducers)
export default rootReducers


