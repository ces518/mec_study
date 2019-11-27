import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onToggle, onRemove }) => {
    // 부모로 부터 받은 todos props를 Todo 컴포넌트 목록 으로 변환하여, 랜더링 해준다.
    return (
        <>
            {
                todos.map(
                    ({ id, text, checked, color }) => 
                        (<Todo 
                            id={id}
                            text={text}
                            checked={checked}
                            onToggle={onToggle}
                            onRemove={onRemove}
                            color={color}
                            key={id}
                        />)
                )
            }
        </>
    );
};

export default TodoList;
