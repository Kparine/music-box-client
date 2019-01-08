import { createStore, combineReducers } from 'redux'
import artists from './reducers/artists'

const reducers = combineReducers({ artists })


export default createStore(reducers)