import React  from 'react';

const TodoItem = ({ todo, onToggleCompleted  }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', width:'50%', border:'black 1px solid' }}>
            <h5 style={{ width: '10%', marginLeft: '20px' }}>{todo.id}</h5>
            <h5 style={{ width: '80%' }}>{todo.title}</h5>
            <input style={{ width: '10%' }} type="checkbox" c
                   checked={todo.completed}
                   onChange={() => {onToggleCompleted(todo.id);}} />
        </div>
    );
};

export default TodoItem;
