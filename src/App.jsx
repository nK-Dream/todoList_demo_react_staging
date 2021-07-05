import React, { Component } from 'react'
import Add from "./components/Add";
import List from "./components/List";
import Footer from "./components/Footer"

import './App.css'
class App extends Component{
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true }
    ]
  }
  updateTodo = (id) => {
    return (e) => {
      const { todos } = this.state;
      todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      })
      this.setState({ todos })
    }
  }
  //新增todo
  addTodo = (newTodo)=>{
    const { todos} = this.state
    this.setState({ todos: [newTodo, ...todos]})
  }
  //删除todo
  delTodo = (id) => {
    const { todos} = this.state
    const newTodos = todos.filter((todo)=>{
      return todo.id !== id;
    })
    this.setState({ todos: newTodos})
  }
  //删除所有已完成
  delAllDone = () => {
    const { todos} = this.state
    const newTodos = todos.filter((todo)=>{
      return !todo.done
    })
    this.setState({ todos: newTodos })
  }
  //全选或者全不选
  checkAll = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => ({...todo,done}))
    this.setState({ todos: newTodos })
  }

  render(){
    const { todos } = this.state
    return (
      <div>
        <Add addTodo={this.addTodo} />
        <List todos={todos} updateTodo={this.updateTodo} delTodo={this.delTodo}/>
        <Footer todos={todos} delAllDone={this.delAllDone} checkAll={this.checkAll}/>
      </div>
    )
  }
  
}

export default App;
