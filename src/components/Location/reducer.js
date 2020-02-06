import { CHANGE_LAT_LONG, CHANGE_LACATION_INPUT, LOCATION_SELECTED, MAKE_LOCATION_AJAX } from "../../redux/actionTypes";


const initialState = {
  latitude: null,
  longitude: null,
  location_suggestions: null,
  searchVal: '',
  entity_id: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_LAT_LONG:
      return {
        ...state,
        latitude: action.payload,
        longitude: action.payload2
      }
    case CHANGE_LACATION_INPUT:
      return {
        ...state,
        searchVal: action.payload
      }
    case MAKE_LOCATION_AJAX:
      return {
        ...state,
        location_suggestions: action.payload
      }

    case LOCATION_SELECTED:
      return {
        ...state,
        searchVal: action.payload,
        location_suggestions: null,
        entity_id: action.payload2
      }
    default:
      return state;
  }
}