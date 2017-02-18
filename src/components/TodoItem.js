/**
 * Created by jibin on 17/2/16.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class TodoItem extends Component{

    handleMouseOver(){
        ReactDOM.findDOMNode(this).style.background = "#eee";
        ReactDOM.findDOMNode(this.refs.delButton).style.display = 'inline-block';
    }

    handleMouseOut(){
        ReactDOM.findDOMNode(this).style.background = "#fff";
        ReactDOM.findDOMNode(this.refs.delButton).style.display = 'none';
    }

    handleChange(){
        let isDone = !this.props.isDone;
        this.props.changeTodoState(this.props.index, isDone);
    }

    handleClick(){
        this.props.deleteTodo(this.props.index);
    }

    render(){
        let className = this.props.isDone ? "todo-done" : "";
        return (
            <li onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>
                <label>
                    <input type="checkbox" checked={this.props.isDone} onChange={this.handleChange.bind(this)}/>
                    <span className={className}>{this.props.text}</span>
                </label>
                <button ref="delButton" className="btn btn-danger" onClick={this.handleClick.bind(this)}>删除</button>
            </li>
        );

    }
}

export default TodoItem;