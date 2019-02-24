import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <button className="btn">Add</button>
          <Edit_item value='ascad'/>
          <Edit_item value='ascad'/>
          <Edit value='abc'>my is is</Edit>
        </div>

    );
  }
}

class Edit extends React.Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">{this.props.value + this.props.children}</li>
                </ul>
            </div>

        );
    }
}

class Edit_item extends React.Component {
    render() {
        return (
            <div>
                    <li className="list-group-item">Cras justo odio
                        <input defaultValue={this.props.value}/>
                    </li>
            </div>

        );
    }
}




export default App;
