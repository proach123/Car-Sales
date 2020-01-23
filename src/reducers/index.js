import {combineReducers} from 'redux';
import { AppReducer } from './AppReducer'
import {editReducer} from './editReducer'

export default combineReducers({
    AppReducer,
    editReducer
})