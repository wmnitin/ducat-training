import { createStore } from 'redux'
import { combineReducers } from 'redux'

import locationReducer from '../components/Location/reducer';

const combineRdcr = combineReducers({
  locationReducer: locationReducer
})

export default createStore(combineRdcr)