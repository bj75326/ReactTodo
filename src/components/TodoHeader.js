/**
 * Created by jibin on 17/2/13.
 */
import React, {Component} from "react";

class TodoHeader extends Component{

    handleKeyUp(ev){
        if(ev.keyCode == 13){
            let value = ev.target.value;
            if(!value) return false;
            let newTodoItem = {
                text: value,
                isDone: false
            };
            ev.target.value = '';
            this.props.addTodo(newTodoItem);
        }
    }

    render(){
        return(
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp.bind(this)} type="text" placeholder="请输入任务名称，按回车键确认"/>
            </div>
        );
    }
}

export default TodoHeader;
