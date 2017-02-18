/**
 * Created by jibin on 17/2/13.
 */
import React, {Component} from 'react';

class TodoFooter extends Component{

    handleChange(ev){
        this.props.changeTodoState(null, ev.target.checked, true);
    }

    handleClick(){
        this.props.cleanDone();
    }

    render(){
        return(
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={this.props.isAllChecked} onChange={this.handleChange.bind(this)}/>
                </label>
                <span>
                    <span className="text-success">已完成{this.props.todoDoneCount}</span> / <span>全部{this.props.todoCount}</span>
                </span>
                <button className="btn btn-danger" onClick={this.handleClick.bind(this)}>清除已完成任务</button>
            </div>
        );
    }
}

export default TodoFooter;
