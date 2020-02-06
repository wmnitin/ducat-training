import httpFetch from '../../utils/http';
import { config } from '../../utils/config';
import { CATEGORY_FETCH } from '../../redux/actionTypes';

export const makeCategoryRequest = () => {
  return (dispatch) => {
    httpFetch(config.category_api, {
      headers: {
        "user-key": config["user-key"]
      },
      method: 'GET'
    }).then(response => {
      dispatch({
        type: CATEGORY_FETCH,
        payload: response
      })
    }).catch(err => {
      console.log('error occured', err)
    })
  }
}