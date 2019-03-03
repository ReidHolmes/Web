import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import  TodoHeader from './TodoHeader'
import './App.css';
import TodoItem from "./TodoItem";

class App extends Component {
  render() {
      let main = (
          <ul className="list-group">
              <TodoItem></TodoItem>
          </ul>
      )
    return (
        <div className="container" style={{marginTop:20}}>
            <div className="row">
                <div className="col-md-6-col-md-offset-3">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <TodoHeader/>
                            {main}
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
  }
}

export default App;
