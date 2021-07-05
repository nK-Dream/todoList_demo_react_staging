import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./index.css"
export default class Add extends Component {
    addTodo = (e)=>{
        if (e.keyCode === 13) {
            const newTodo = {
                id:uuidv4(),
                name: this.addValue.value,
                done:false
            }
            this.props.addTodo(newTodo)
            this.addValue.value = ''
        }
    }
    render() {
        return (
            <div className="form-group header">
                <input type="text" className="form-control" placeholder="回车添加todo" ref={c => this.addValue = c} onKeyUp={this.addTodo}/>
            </div>
        )
    }
}
