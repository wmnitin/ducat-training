import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'

import reduxThunk from 'redux-thunk'

import locationReducer from '../components/Location/reducer';
import categoryReducer from '../components/Category/reducer';
import restaurantReducer from '../components/Restaurants/reducer';
import testReducer from '../components/Homepage/testreducer';


const combineRdcr = combineReducers({
  locationReducer,
  categoryReducer,
  restaurantReducer,
  testReducer
})

export default createStore(combineRdcr, applyMiddleware(reduxThunk))