import React, { Component } from 'react'
import Todos from '../components/todos'
import AddTodo from '../components/addTodo'
import {Redirect} from 'react-router-dom'
import HelloName from '../components/helloName'

class Dashboard extends Component {

  state = {
    todos:  [
      {id: 1, content: 'do laundry'},
      {id: 2, content: 'clean bedroom'},
      {id: 3, content: 'eat food'},
      {id: 4, content: 'charge cellphone'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todos => {
      return todos.id !== id
    })
    this.setState({
      todos,
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }

  render() {
    // const {authError, auth} = this.props
    // if(!auth.uid) return <Redirect to='/' />

    const profile = this.props.profile
    console.log(this.state)
    return (
      <div className="container">
        <HelloName profile={profile} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default Dashboard
