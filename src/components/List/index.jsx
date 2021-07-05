import React, { Component } from 'react'
import Item from "../Item"
import './index.css'

export default class List extends Component {

    render() {
        const { todos, delTodo, updateTodo } = this.props
        return (
            <ul>
                {
                    todos.map((todoObj)=>{
                        return <Item key={todoObj.id} todoObj={todoObj} delTodo={delTodo} updateTodo={updateTodo}/>
                    })
                }
            </ul>
        )
    }
}
