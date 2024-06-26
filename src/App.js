import './App.css';
import TodoItem from "./todo-item/TodoItem";
import { useState } from "react";

function App() {
    const [todos, setTodos] = useState([
        { id: 1, title: 'Install React', completed: true },
        { id: 2, title: 'Style app', completed: false },
        { id: 3, title: 'Finish service functionality', completed: false },
        { id: 4, title: 'Setup API', completed: false },
        { id: 5, title: 'Test app', completed: false },
    ]);

    const handleToggleCompleted = (todoId) => {
        // Find the todo item with the given id
        const updatedTodos = todos.map(todo => {
            if (todo.id === todoId) {
                // Toggle the completed status
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });

        // Update the todos state with the updated todo list
        setTodos(updatedTodos);
    };

    function addTodos() {
        const newTodos = [];
        for (let i = 0; i < 100; i++) {
            newTodos.push({
                id: todos.length + i + 1,
                title: 'New todo ' + (todos.length + i + 1),
                completed: false
            });
        }
        setTodos(prevTodos => [...prevTodos, ...newTodos]);
    }

    return (
        <div>
            <h1>TODO APP</h1>
            <div>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} onToggleCompleted={handleToggleCompleted} />
                ))}
            </div>
            <button onClick={() => addTodos()}>Add 100 Todos</button>
        </div>
    );
}

export default App;
