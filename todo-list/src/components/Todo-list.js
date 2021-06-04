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
    
    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    return {
                        ...todo,
                        complete: !todo.complete,
                    };
                }else{
                    return todo
                }
            })
        })
    }

    render (){
        return (
            <div>
                <Todo_from onSubmit={this.addTodo}/>
                {this.state.todos.map( todo =>
                    <Todo key={todo.id} toggleComplete={() => this.toggleComplete(todo.id)}  todo={todo}/>
                )}
            </div>
        )
    }
}