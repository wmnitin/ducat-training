const initialState = {
  restaurantList: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'RESTAURANT_DATA':
      return {
        ...state,
        restaurantList: action.data
      }
    default:
      return state
  }
}