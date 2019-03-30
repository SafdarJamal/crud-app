import React, { Component } from 'react';
import './App.css';
// import logo from './logo.svg';
// import { type } from 'os';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: "Jordon Walke",
    num_comments: 3,
    points: 4,
    objectId: 0
  },
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: "Jordon Walke",
    num_comments: 3,
    points: 4,
    objectId: 1
  },
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: "Jordon Walke",
    num_comments: 3,
    points: 4,
    objectId: 2
  },
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: "Jordon Walke",
    num_comments: 3,
    points: 4,
    objectId: 3
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list
    }

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    const updatedList = this.state.list.filter(item => {
      return item.objectId !== id;
    })
    this.setState({list: updatedList});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h1>CRUD APP</h1> */}
          {this.state.list.map(item => (
            <div key={item.objectId}>
              <li>
                <a href={item.url} className="App-link" target="blank">{item.title}</a>
              </li>
              <li>{item.author}</li>
              <li>{item.num_comments}</li>
              <li>{item.points}</li>
              <button onClick={() => this.onDismiss(item.objectId)} type="button">Dismiss</button>
            </div>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
