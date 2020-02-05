const initialState = {
  list: null,
  name: 'nitin'
}

export default function (state = initialState, action) {
  switch (action.types) {
    case 'KJBSDFKJBDGJKBSDJGKB':
      return{
        ...state,
        list: action.payload
      }
    default:
      return state
  }
}