import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <button className="btn">Add</button>
          <Edit_item></Edit_item>
          <Edit></Edit>
        </div>

    );
  }
}

class Edit extends Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">Cras justo odio</li>
                </ul>
            </div>

        );
    }
}

class Edit_item extends Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">Cras justo odio</li>
                </ul>
            </div>

        );
    }
}




export default App;
