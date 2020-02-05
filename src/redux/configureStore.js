import { createStore } from 'redux'
import { combineReducers } from 'redux'

import locationReducer from '../components/Location/reducer';
import categoryReducer from '../components/Category/reducer';
import testReducer from '../components/Homepage/testreducer';


const combineRdcr = combineReducers({
  locationReducer,
  categoryReducer,
  testReducer
})

export default createStore(combineRdcr)