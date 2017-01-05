const posts = (state = [], action) => {
  // console.log('posts will change')
  // console.log(state, action)
  switch (action.type) {
    case 'INCREMENT_LIKES':
      return [
        ...state.slice(0, action.idx),
        {...state[action.idx], likes: state[action.idx].likes + 1},
        ...state.slice(action.idx + 1)
      ]
    default:
      return state
  }
}

export default posts
