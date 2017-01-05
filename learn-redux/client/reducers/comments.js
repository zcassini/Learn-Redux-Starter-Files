const postComments = (state = [], action) => {
 console.log('addctionjackson:', action)

  switch(action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
      console.log('gg')
      return [...state.slice(0, action.idx), ...state.slice(action.idx + 1)]
    default:
      console.log('default')
      return state
  }
}

const comments = (state = [], action) => {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }

  return state
}

export default comments
