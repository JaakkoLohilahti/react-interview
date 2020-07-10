import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Button, TextField } from '@material-ui/core';

function TodoForm({ newTodo }) {
    const [todos, setTodo] = useState({
        id: "",
        name: "",
        complete: false
    });

    function handleTodoInputChange(e) {
        setTodo({ ...todos, name: e.target.value });
    }

    function onSubmit(event) {
        event.preventDefault();
        if (todos.name.trim()) {
            newTodo({ ...todos, id: uuid() });
            setTodo({ ...todos, name: "" });
        }
    }

    return (
        <form className="todo-form" onSubmit={onSubmit}>
            <TextField
                id="filled-basic"
                label="To do"
                variant="filled"
                name="name"
                type="text"
                value={todos.name}
                onChange={handleTodoInputChange}
            />
            <Button variant="contained" size="large" color="primary" type='submit'>Add To do</Button>
        </form>
    );
}

export default TodoForm;