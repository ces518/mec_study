import React from 'react';
import './Todo.css';

const Todo = ({ id, text, checked, onToggle, onRemove, color }) => {
    return (
        <div className="todo-item">
            {/* 삭제 이벤트 바인딩 */}
            <div className="remove" onClick={onRemove(id)}>&times;</div>
            {/* 만약 Todo 할일이 완료되었다면 (checked = true 상태) 체크표시 */}
            <div className={`todo-text ${checked && 'checked'}`} onClick={onToggle(id)}>
            <div style={{ color }}>{text}</div>
            </div>
        </div>        
    );
};

export default Todo;
