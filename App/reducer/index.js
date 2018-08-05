import {combineReducers} from 'redux'

import {
    setUserAddressReducer,
    setNewsDataReducer
 } from './reducer';

 const  rootReducer = combineReducers({
    setUserAddressRootReducer: setUserAddressReducer,
    setNewsDataRootReducer: setNewsDataReducer
})

export default rootReducer;