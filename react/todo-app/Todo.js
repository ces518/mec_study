import React from 'react';
import './Todo.css';

const Todo = ({ id, text, checked, onToggle }) => {
    return (
        <div className="todo-item" onClick={onToggle(id)}>
            <div className="remove" >&times;</div>
            {/* 만약 Todo 할일이 완료되었다면 (checked = true 상태) 체크표시 */}
            <div className={`todo-text ${checked && 'checked'}`}>
            <div>{text}</div>
            </div>
        </div>        
    );
};

export default Todo;
