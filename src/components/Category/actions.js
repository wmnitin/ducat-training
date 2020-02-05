import httpFetch from '../../utils/http';
import { config } from '../../utils/config';

export const makeCategoryRequest = () => {
  return (dispatch) => {
    httpFetch(config.category_api, {
      headers: {
        "user-key": config["user-key"]
      },
      method: 'GET'
    }).then(response => {

      dispatch({
        type: 'KJBSDFKJBDGJKBSDJGKB',
        payload: response
      })
      // this.setState({
      //   list: response
      // })
    }).catch(err => {
      this.setState({
        error: true
      })
    })
  }
}