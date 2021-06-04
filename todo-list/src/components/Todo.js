import React, {Component} from 'react';

export default (props) => 
                <div style={{
                    textDecoration: props.todo.complete ? "line-through" : "",
                    color: props.todo.complete ? "red" : "black"}} 
                    onClick={props.toggleComplete}>
                    {props.todo.text}
                </div>