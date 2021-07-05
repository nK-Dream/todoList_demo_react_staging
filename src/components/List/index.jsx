import React, { Component } from 'react'
import Item from "../Item"
import './index.css'

export default class List extends Component {

    render() {
        const { todoList, delTodo, updateTodo } = this.props
        return (
            <ul>
                {
                    todoList.map((todoObj)=>{
                        return <Item key={todoObj.id} todoObj={todoObj} delTodo={delTodo} updateTodo={updateTodo}/>
                    })
                }
            </ul>
        )
    }
}
