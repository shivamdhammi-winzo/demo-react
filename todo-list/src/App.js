import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import User from './components/User'
import Todo_list from './components/Todo-list';

class App extends Component {

  state = {
    visibleApp: true,
  }

  handleClick = () => {
        this.setState({ visileApp : this.state.visileApp  ? false : true })
  }



  render(){
    let whatToShow = this.state.visileApp ? <User/> : <Todo_list/>;
    return (
          <div>
            <button onClick={this.handleClick}>Toggle Button</button>
            {whatToShow}
          </div>
    );
  };
}

export default App;
