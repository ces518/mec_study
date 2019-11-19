import React, { useState, useRef } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import './App.css';

// 초기값 세팅
const todoList = [
  {
    id: 1,
    text: '칼퇴하기',
    checked: false, // 체크여부를 확인하는 상태
  },
  {
    id: 2,
    text: '맛밥하기',
    checked: true,
  },
  {
    id: 3,
    text: '꿀잠자기',
    checked: false,
  },
];

const App = () => {
  // useState를 활용해 할일 목록 상태를 정의한다.
  const [todos, setTodos] = useState(todoList);
  // useState를 활용해 Form의 input 값을 상태로 관리한다.
  const [text, setText] = useState('');
  // 다음에 추가될 목록의 아이디
  // useRef 는 화면의 랜더링과 관계가없는 상태를 관리할때 사용한다.
  // 이를 이용해 DOM에 직접 접근도 가능하다.
  const nextId = useRef(4);

  const onChange = e => {
    setText(e.target.value);
  };

  const onCreate = () => {
    console.log(nextId.current);
    const todo = {
      id: nextId.current++,
      text,
      checked: false,
    };
    
    // 새로운 배열을 만들어서 넣어주는 이유 ?
    // 불변성 지켜준다.
    // 배열, 객체 등은 불변성을 지켜 주어야한다.
    // - 원본 데이터를 조작해서는 안된다.
    // (함수형 프로그래밍의 기초)
    // 자바스크립트 Array의 다양한 함수들이 로직 수행후 결과로 새로운 배열을 생성해준다.
    // 자바의 Stream API 들도 함수형 프로그래밍에 기반함.. 불변성을 유지한다.
    // 불변성 유지를 쉽게해주는 모듈도 존재한다.

    // 불변성을 유지하는 첫번째 방법
    // 기존 배열을 복사한뒤, 가장 마지막에 
    const newTodos = [
      ...todos,
      todo,
    ];

    // 두번째 방법
    // Array의 concat함수를 사용하는 방법
    // 원본배열에 인자의 데이터를 추가한 새로운 함수를 리턴해준다.
    const newTodos2 = todos.concat(todo);

    setTodos(newTodos);

    // Form의 input 을 비워준다.
    setText('');
  };

  const onKeyPress = e => {
    // Enter 키를 눌렸다면 onCreate함수를 호출해 todo를 생성한다.
    if (e.key === 'Enter') {
      onCreate();
    }
  };

  // 고차함수로 기존 함수를 확장한다.
  // HOF, HOC 의 개념 
  const onToggle = id => () => {
      console.log(id);

      // id에 해당하는 todo를 찾음 
      const index = todos.findIndex(todo => id === todo.id);
      const todo = todos[index];

      // 불변성을 유지하면서 todo의 상태를 변경
      const newTodo = {
        ...todo,
        checked: !todo.checked,
      };

      // 변경된 todos 배열을 생성
      const newTodos = [...todos];
      // 변경할 todo의 index에 해당하는 데이터를 바꿔줌
      newTodos[index] = newTodo;

      // 상태로 반영
      setTodos(newTodos);
  };

  return (
    <main className="todo-list-template">
      <div className="title">
        오늘 할 일
      </div>
      <section className="form-wrapper">
        {/* 
          폼의 input 데이터를 관리할 text 상태를 props로 전달해준다. 
          input의 데이터가 바뀔때마다 상태로 반영해줄 onChange 함수를 지정해준다.
        */}
        <Form 
          value={text}
          onChange={onChange}
          onCreate={onCreate}
          onKeyPress={onKeyPress}
        />
      </section>
      <section className="todos-wrapper">
        {/* 
          todos 상태를 자식인 TodoList에게 props로 전달해준다. 
          TODO 를 클릭하면 완료한 일감으로 처리하도록 onToggle 함수를 전달해 준다.
        */}
        <TodoList 
          todos={todos} 
          onToggle={onToggle}
        />
      </section>
    </main>
  );
};

export default App;
