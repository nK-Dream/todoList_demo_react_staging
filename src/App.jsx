import React, { Component } from 'react'
import Add from "./components/Add";
import List from "./components/List";
import Footer from "./components/Footer"

import './App.css'
class App extends Component{
  state = {
    todoList: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true }
    ]
  }
  updateTodo = (id) => {
    return (e) => {
      const { todoList } = this.state;
      todoList.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      })
      this.setState({ todoList })
    }
  }
  //新增todo
  addTodo = (newTodo)=>{
    const {todoList} = this.state
    this.setState({ todoList:[newTodo,...todoList]})
  }
  //删除todo
  delTodo = (id) => {
    const {todoList} = this.state
    const arr = todoList.filter((todo)=>{
      return todo.id !== id;
    })
    this.setState({todoList:arr})
  }
  //删除所有已完成
  delAllDone = () => {
    const {todoList} = this.state
    const arr = todoList.filter((todo)=>{
      return todo.done === false
    })
    this.setState({ todoList: arr })
  }
  //全选或者全不选
  checkAll = (done) => {
    const { todoList } = this.state;
    todoList.map((todo) => ({...todo,done}))
    this.setState({ todoList })
  }

  render(){
    const { todoList } = this.state
    return (
      <div>
        <Add addTodo={this.addTodo} />
        <List todoList={todoList} updateTodo={this.updateTodo} delTodo={this.delTodo}/>
        <Footer todoList={todoList} delAllDone={this.delAllDone} checkAll={this.checkAll}/>
      </div>
    )
  }
  
}

export default App;
