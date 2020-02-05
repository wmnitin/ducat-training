const myState = {
  count: 0
}

export default (state = myState, action) => {
  switch (action.type) {
    case 'BUTTON_CLICKED':
      return {
        ...state,
        count: state.count + 1
      }
    default:
      return state
  }
}