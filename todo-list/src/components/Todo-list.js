import React, { Component } from "react";
import Todo_from from "./Todo-form";
import Todo from './Todo'

export default class Todo_list extends Component {

    state = {
        todos : [],
    };

    addTodo = (todo) => {
        const newTodos = [todo,...this.state.todos]
        this.setState({
            todos: newTodos
        });
    };

    render (){
        return (
            <div>
                <Todo_from onSubmit={this.addTodo}/>
                {this.state.todos.map( todo =>
                    <Todo key={todo.id} text={todo.text}/>
                )}
            </div>
        )
    }
}