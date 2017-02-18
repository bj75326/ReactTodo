/**
 * Created by jibin on 17/2/13.
 */
import React, {Component} from "react";
import LocalDb from "localDb";
import TodoHeader from "./TodoHeader.js";
import TodoMain from "./TodoMain.js";
import TodoFooter from "./TodoFooter.js";

class App extends Component{
    constructor(){
        super();
        this.db = new LocalDb("ReactTodo");
        this.state = {
            //组件状态
            todos: this.db.get("todos") || [],
            isAllChecked: false
        };
    }

    //检查所有任务完成状态，更新App state
    allChecked(){
        let isAllChecked = false;
        if(this.db.get("todos").every((todo)=>todo.isDone)){
            isAllChecked = true;
        }
        this.setState({
            todos: this.state.todos,
            isAllChecked: isAllChecked
        });
    }

    //添加任务，App组件传递给Header组件
    addTodo(todoItem){
        this.state.todos.push(todoItem);
        this.db.set("todos", this.state.todos);
        this.allChecked();
    }

    //删除当前任务，App组件传递给Main组件
    deleteTodo(index){
        this.state.todos.splice(index, 1);
        this.setState({todos: this.state.todos});
        this.db.set("todos", this.state.todos);
    }

    //改变任务状态， App组件传递给Footer, Main组件
    changeTodoState(index, isDone, isChangeAll = false){
        if(isChangeAll){
            this.setState({
                todos: this.state.todos.map((todo)=>{
                    todo.isDone = isDone;
                    return todo;
                }),
                isAllChecked: isDone
            });
        }else{
            this.state.todos[index].isDone = isDone;
            this.allChecked();
        }
        this.db.set("todos", this.state.todos);
    }

    //清除已完成任务，App组件传递给Footer组件
    cleanDone(){
        let todos = this.state.todos.filter((todo)=>!todo.isDone);
        this.setState({
            todos: todos,
            isAllChecked: false
        });
        this.db.set("todos", todos);
    }

    render(){
        let info = {
            isAllChecked: this.state.isAllChecked,
            todoCount: this.state.todos.length || 0,
            todoDoneCount: (this.state.todos && this.state.todos.filter((todo)=> todo.isDone)).length || 0
        };

        return (
            <div className="todo-wrap">
                <TodoHeader addTodo={this.addTodo.bind(this)}/>
                <TodoMain todos={this.state.todos} deleteTodo={this.deleteTodo.bind(this)} changeTodoState={this.changeTodoState.bind(this)}/>
                <TodoFooter {...info} changeTodoState={this.changeTodoState.bind(this)} cleanDone = {this.cleanDone.bind(this)}/>
            </div>
        );
    }
}

export default App;

