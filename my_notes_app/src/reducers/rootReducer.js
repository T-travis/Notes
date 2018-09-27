
const initState = {
  posts: [
    {id: '1', body: ' ONE Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
    {id: '2', body: 'TWO Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
    {id: '3', body: 'THREE Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'}

  ]
}

const rootReducer = (state = initState, action) => {
  //console.log(action);
  if(action.type === 'DELETE_POST') {
    const newPosts = state.posts.filter(post => {
      return post.id !== action.id
    })
    return {
      ...state,
      posts: newPosts
    }
  }
  else if(action.type === 'ADD_POST') {
    //console.log(action.payload)
    return {
      ...state,
      posts: [action.payload, ...state.posts]
    }
  }
  else if(action.type === 'UPDATE_POST') {
    //console.log(action.payload.body);
    
    //const newPosts = state.posts.filter(post => {return post.id !== action.payload.id})
    //newPosts.push(action.payload)

    const newPosts = state.posts.map(post => {
      if(post.id === action.payload.id) {
        return  action.payload;
      }
      return post
    })
    return {
      ...state,
      posts: newPosts
    }
    
  }
  return state;
}

export default rootReducer;