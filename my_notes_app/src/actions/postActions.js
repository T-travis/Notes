
export const addPost = (newPost) => {
  return {
    type: 'ADD_POST',
    payload: newPost
  }
}

export const deletePost = (id) => {
  return {
    type: 'DELETE_POST',
    id: id
  }
}

export const updatePost = (updatedPost) => {
  return {
    type: 'UPDATE_POST',
    payload: updatedPost
  }
}