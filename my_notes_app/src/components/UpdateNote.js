import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePost } from '../actions/postActions';

class UpdateNote extends Component {

  constructor() {
    super();

    this.state = {
      id: "",
      body: ""
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.post_id;
    let body = ""

    this.props.posts.forEach(post => {
      if(post.id === id) {
        body =  post.body
      }
    });

    this.setState({ id: id, body: body })
  }

  onChange = (e) => {
    //console.log(e.target.value)
    this.setState({ [e.target.id]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { body, id } = this.state;
    //console.log(body)
    const newNote = {
      id: id,
      body: body
    }

    this.props.updatePost(newNote);


    // clears state
    this.setState({
      id: "",
      body: ""
    });

    // redirect back to home on submit
    this.props.history.push("/");
  }

  render() {
    //console.log(this.props.match.params.post_id);
    const { body } = this.state;

    return (
      <div className="container form-group">
        <form onSubmit={this.onSubmit}>
          <label>
            Update Note:
          </label>
          <textarea className="form-control" type="text" id="body" value={body} onChange={this.onChange} />
          
          <input className="btn btn-default mt-2" type="submit" value="Submit" />
        </form>
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
    updatePost: (post) => { dispatch(updatePost(post)) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UpdateNote);
