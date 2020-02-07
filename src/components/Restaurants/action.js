export const getReataurantData = (data) => {
  return dispatch => {
    dispatch({
      type: 'RESTAURANT_DATA',
      data
    })
  }
}