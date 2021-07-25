import React, { Component } from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addTodo();
    }

    handleChange(e){
        this.props.updateState(e);
    }

    render(){
        return(
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="todoName">Enter todo:</label>
          <input id="todoName" name="todoName" type="text" value={this.props.todoName} placeholder="Enter a todo!" onChange={this.handleChange}/>
          <br/><br/>
          <label htmlFor="todoDescription">Todo Description:</label>
          <textarea id="todoDescription" name="todoDescription" value={this.props.todoDescription} placeholder="Enter a description" onChange={this.handleChange}></textarea>
          <br/><br/>
          <label htmlFor="timeToFinish">Hours:</label>
          <input id="timeToFinish" name="timeToFinish" type="time" value={this.props.timeToFinish} onChange={this.handleChange} required/>
          <input type="submit" hidden={true}/>
        </form>
        );
    }
};

export default Form;