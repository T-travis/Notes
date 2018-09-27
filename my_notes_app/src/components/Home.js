import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';
import { Link } from 'react-router-dom';

class Home extends Component {

  onClickDelete = (id) => {
    this.props.deletePost(id)
  }
  
  render() {
    //console.log(this.props);
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="card card-body p-1 mt-3" key={post.id}>
          
            <div className="container p-1">
              <div className="container p-1 pr-3 pl-3 mb-0">{post.body}</div>
              <Link to={"/update_note/" + post.id}><span style={{ cursor: "pointer", float: "left", color: "green" }} ><i className="far fa-edit"></i></span></Link>
              <span onClick={() => {this.onClickDelete.bind(this.onClickDelete(post.id))}} style={{ cursor: "pointer",  color: "red", float: "right" }}><i className="far fa-trash-alt"></i></span>
           </div>
           
          </div>
        )
      })
      ) : (
      <div className="center">No posts yet</div>
    )

    return (
      <div className="container">
        {postList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => { dispatch(deletePost(id)) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
