import './App.css';
import React from 'react';
import Form from './Form';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todoName:"",
      todoDescription:"",
      timeToFinish:"",
      todos:[],
      todoID:1
    };
    this.updateState = this.updateState.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  updateState(e){
    this.setState(curState => {return {[e.target.name]: e.target.value}});
  };

  addTodo(){
    const {todoName, todoDescription, timeToFinish, todos, todoID} = this.state;
    const todo = {
      id: todoID,
      title: todoName,
      description: todoDescription,
      time: timeToFinish
    }
    this.setState(curState => {return {todos: [...todos, todo], todoID: curState.todoID+1, todoName:'', todoDescription:'', timeToFinish:''}});
  }

  render(){
    const todos = this.state.todos.map(todo=>{return(<div key={todo.id} onClick={this.handleClick}><strong>{todo.title}</strong><p>{todo.description}</p><p>{todo.time} hours to accomplish</p></div>)});
    return (
      <div>
      <Form todoName={this.state.todoName} todoDescription={this.state.todoDescription} timeToFinish={this.state.timeToFinish} addTodo={this.addTodo} updateState={this.updateState}/>  
      {todos}
      </div>
    );
  }
}

export default App;
