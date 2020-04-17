import {createStore} from 'redux'
import reduce from './reduce'
const initialState = {
    count:0
}

const store = createStore(reduce,initialState)

export default store;