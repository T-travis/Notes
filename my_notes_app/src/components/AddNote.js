import React, { Component } from 'react';
import uuid from "uuid";
import { connect } from 'react-redux';
import { addPost } from '../actions/postActions';

class AddNote extends Component {

  constructor() {
    super();

    this.state = {
        id: "",
        title: "",
        body: ""
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    //console.log(e.target.value)
    this.setState({ [e.target.id]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);

    const { title, body } = this.state;

    const newNote = {
      id: uuid(),
      title: title,
      body: body
    }

    //this.props.addNote({type: 'ADD_NOTE', payload: newNote});
    this.props.addPost(newNote);


    // clears state
    this.setState({
      id: "",
      title: "",
      body: ""
    });

    // redirect back to home on submit
    this.props.history.push("/");
  }

  render() {
    const { body } = this.state;
    return (
      <form className="container form-group" onSubmit={this.onSubmit}>
        <label>
          New Note:
        </label>
        <textarea className="form-control" type="text" id="body" value={body} onChange={this.onChange} />
        
        <input className="btn btn-default mt-2" type="submit" value="Submit" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => { dispatch(addPost(post)) }
  }
}


export default connect(null, mapDispatchToProps)(AddNote);
