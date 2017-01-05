// increment
export const increment = (idx) => ({
  type: 'INCREMENT_LIKES',
  idx
})

// add comment
export const addComment = (postId, author, comment) => ({
  type: 'ADD_COMMENT',
  postId,
  author,
  comment
})

// remove comment
export const removeComment = (postId, idx) => ({
  type: 'REMOVE_COMMENT',
  postId,
  idx
})
