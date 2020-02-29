import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import Input from './components/input/input';
import { addTodoTask } from './redux/todo-list/list-action';
 
class App extends React.Component {
  
  render(){
    return (
      <div>
        <h1>Todo App</h1>
        <Input addTodoTask={task => this.props.addTodoTask(task)} />
        <ul>
          {
            this.props.todoList.map((task, ind) => <li key={ind}>{task}</li>)
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps =  state => ({
  todoList: state.list.todoList
})

const mapDispatchToProps = dispatch => ({
  addTodoTask: task => dispatch(addTodoTask(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
