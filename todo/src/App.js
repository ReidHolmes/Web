import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import  TodoHeader from './TodoHeader'
import TodoItem from "./TodoItem";

class App extends Component {
    constructor(prpos){
        super(prpos);
        this.state = {todos:[
                {id:Date.now(),title:'明天',completed:false},
                {id:Date.now(),title:'React_todo',completed:false}
            ]};//初始化默认状态
    }
    addTodo =(todo)=> {
        todo = Object.assign({}, {id: Date.now(), completed: false}, todo);
        let todos = this.state.todos;
        todos.push(todo);
        this.setState({todos});

    }
    render() {
      let main = (
          <ul className="list-group">

              {this.state.todos.map((todo,index)=><TodoItem Key={index} todo={todo}></TodoItem>)}
          </ul>
      )
    return (
        <div className="container" style={{marginTop:20}}>
            <div className="row">
                <div className="col-md-6-col-md-offset-3">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <TodoHeader addTodo={this.addTodo}/>
                        </div>
                        <div className="panel-body">
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
