import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducer/index'
import thunk from 'redux-thunk';
export default function configureStore(initialState) {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  return store
}