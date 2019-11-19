import React from 'react';
import './Form.css';

const Form = ({ value, onChange, onKeyPress, onCreate }) => {
    return (
        <div className="form">
            {/* 
                Form의 value로 text 상태를 넣어주는 이유 ?
                input의 값이 바뀌면 onChange 함수로 인해 상태값이 변경되는데 value값에 text상태를 넣어줘서 동기화를 해줘야하나 ?
                text상태값이 input에 의해서만 변경된다면 문제가 없다..
                하지만 text상태값이 다른 이벤트에 의해 변경되거나, 
                할일 목록을 생성한뒤에는 이 값을 비워줘야하는데 input 의 value로 넣어준다면
                text상태값을 변경해주는것만 하여도 input의 값이 변경된다.
             */}
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
};

export default Form;
