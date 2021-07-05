import React, {Component} from 'react';
import './index.css'

export default class Footer extends Component{
    state = {
        count:0
    }
    delAllDone = ()=>{
        if (window.confirm("是否要删除？"))this.props.delAllDone()
    }
    checkAll = (e) => {
        this.props.checkAll(e.target.checked)
    }
    render(){
        const { todoList } = this.props
        const doneCount = todoList.reduce((preValue,current)=> preValue + (current.done ? 1 : 0),0)
        const total = todoList.length
        return(
            <div className='footer'>
                <input type="checkbox" checked={(doneCount === total) && doneCount!==0} onChange={this.checkAll}/>
                <span>已完成{doneCount} / 全部{total}</span>
                <button type="button" onClick={this.delAllDone} className="btn btn-warning pull-right">清除已完成</button>
            </div>
        )
    }
}