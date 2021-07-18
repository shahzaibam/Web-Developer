import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem"

export const Todos = (props) => {

    let myStyle = {
        minHeight : "70vh"
    }

    return (
        <div className="container"  style={myStyle}>
            <h3 className="text-center my-10">Todos List</h3>
            {props.todos.length === 0 ? "no todos left" :""}
            {props.todos.map((todo)=>{
                console.log(todo.sno)
                return  <TodoItem todo={todo} onDelete={props.onDelete} />
            })}
        </div>

    )
}
