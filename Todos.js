import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem"

export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-10">Todos List</h3>
            {props.todos.map((todo)=>{
                return  <TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete} />
            })}
        </div>

    )
}
