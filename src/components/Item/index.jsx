import React, { Component } from 'react'
import "./index.css"
export default class Item extends Component {
    state = {
        mouseIsEnter: false
    }

    isCurrentTodo = (currType) => {
        return ()=>{
            this.setState({ mouseIsEnter: currType })
        }
    }
    //更改完成状态
    updateTodo = (id) => this.props.updateTodo(id)
    //删除todo
    delTodo = (id) => {
        return ()=>{
            if (window.confirm("是否要删除？")) this.props.delTodo(id);
        }
    }

    render() {
        const { todoObj } = this.props
        const { mouseIsEnter } = this.state
        return (
            <li onMouseEnter={this.isCurrentTodo(true)} onMouseLeave={this.isCurrentTodo(false)} style={{ background: mouseIsEnter ? '#ccc' : '#fff'}}>
                <input type="checkbox" checked={todoObj.done} onChange={this.updateTodo(todoObj.id)} />
                {todoObj.name}
                <button type="button" className="btn btn-warning pull-right" onClick={this.delTodo(todoObj.id)} style={{ display: mouseIsEnter ? 'block' : 'none' }}>删 除</button>
            </li>
        )
    }
}
