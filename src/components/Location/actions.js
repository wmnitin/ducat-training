import { CHANGE_LAT_LONG, CHANGE_LACATION_INPUT, LOCATION_SELECTED, MAKE_LOCATION_AJAX } from "../../redux/actionTypes"
import httpFetch from "../../utils/http"
import { config } from "../../utils/config"

export const changeLatLong = (lat, long) => {
  return dispatch => {
    dispatch({
      type: CHANGE_LAT_LONG,
      payload: lat,
      payload2: long
    })
  }
}

export const changeLocationValue = (val) => {
  return dispatch => {
    dispatch({
      type: CHANGE_LACATION_INPUT,
      payload: val
    })
  }
}

export const makeLocationAjax = (inputval, lat, long) => {
  return dispatch => {
    httpFetch(config.search_location_api + '?query=' + inputval + '&lat=' + lat + '&lon=' + long + '&count=10', {
      headers: {
        'user-key': config["user-key"]
      }
    }).then(res => {
      dispatch({
        type: MAKE_LOCATION_AJAX,
        payload: res.location_suggestions
      })
    }).catch(err => {
      console.log(err)
    })
  }
}

export const locationSelected = (entityid, title) => {
  return dispatch => {
    dispatch({
      type: LOCATION_SELECTED,
      payload: title,
      payload2: entityid
    })
  }
}