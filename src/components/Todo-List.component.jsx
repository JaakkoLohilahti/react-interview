import React from 'react';
import Todo from './Todo.component'
import { List } from '@material-ui/core';

function TodoList({ todo, toggleComplete, removeClick }) {
    return (
        <List className="todo-list">
            {todo.map(todos => (
                <Todo
                    key={todos.id}
                    todos={todos}
                    toggleComplete={toggleComplete}
                    removeClick={removeClick}
                />
            ))}
        </List>
    );
}

export default TodoList;