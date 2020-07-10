import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/Todo-Form.component';
import TodoList from './components/Todo-List.component';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

function App() {
    const [todo, setTodos] = useState([]);

    function newTodo(todos) {
        setTodos([todos, ...todo]);
    }

    function toggleComplete(id) {
        setTodos(
            todo.map(todos => {
                if (todos.id === id) {
                    return {
                        ...todos,
                        complete: !todos.complete
                    };
                }
                return todos;
            })
        );
    }

    function removeClick(id) {
        setTodos(todo.filter(todos => todos.id !== id));
    }

    return (
        <div className="App">
            <Typography style={{ padding: 10 }} variant="h2">
                <Paper variant="outlined" square />
                <p>React Todo</p>
                <TodoForm newTodo={newTodo} />
                <TodoList
                    todo={todo}
                    toggleComplete={toggleComplete}
                    removeClick={removeClick}
                /><Paper variant="outlined" square />
            </Typography>
        </div>
    );
}

export default App;
