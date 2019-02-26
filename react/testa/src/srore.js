import {createStore} from 'redux'
import reducer from './reduce'
const initialState = {
    count:0
}
let store = createStore(reducer,initialState)
export default store;