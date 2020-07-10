import React from 'react';
import { Checkbox, IconButton, ListItem, Typography } from '@material-ui/core';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

function Todo({ todos, toggleComplete, removeClick }) {

    function handleClick() {
        toggleComplete(todos.id);
    }

    function handleRemoveClick() {
        removeClick(todos.id);
    }

    return (
        <ListItem style={{ display: "flex" }}>
            <Typography
                variant="h4"
                style={{
                    textDecoration: todos.complete ? "line-through" : null,
                }}
            >
                {todos.name}
            </Typography>
            <Checkbox
                checked={todos.complete} onClick={handleClick} />
            <IconButton onClick={handleRemoveClick}><DeleteForeverRoundedIcon />
            </IconButton>
        </ListItem>
    );
}

export default Todo;