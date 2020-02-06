import { CATEGORY_FETCH } from "../../redux/actionTypes"

const initialState = {
  list: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CATEGORY_FETCH:
      return {
        ...state,
        list: action.payload
      }
    default:
      return state
  }
}