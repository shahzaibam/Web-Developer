import React, { useState } from 'react';

export const AddTodo = (props) => {

    let [title, setTitle] = useState("");
    let [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank")
        }
        else {
            props.addTodo(title, desc);

            let inputValue = document.querySelector(".htmlform-control")
            let inputValueDesc = document.querySelector("#todo-desc")

            inputValue.value = ""
            inputValueDesc.value = ""
        }

    }

    let inputStyle = {
        width: "100%"
    }

    return (

        <div className="container">
            <div>
                <h3 className="text-center">Add Todo</h3>
                <form className="mx-3" onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="htmlform-label">Todo Title</label>
                        <input type="text" style={inputStyle} onChange={(e) => { setTitle(e.target.value) }} className="htmlform-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="htmlform-label">Todo Description</label>
                        <input type="text" style={inputStyle} onChange={(e) => { setDesc(e.target.value) }} className="htmlform-control" id="todo-desc" />
                    </div>
                    <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
                </form>
            </div>
        </div>
    )
}
