import React, {useState} from "react";

function AddTodo(onCreate) {
    const [value, setValue] = useState('')
    
    function submitHandler() {
        // event.preventDefault()

        if (value.trim()) {
            onCreate(value)
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default AddTodo