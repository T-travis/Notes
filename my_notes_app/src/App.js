import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AddNote from './components/AddNote';
import UpdateNote from './components/UpdateNote';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add_note" component={AddNote} />
            <Route exact path="/update_note/:post_id" component={UpdateNote} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
