import React from 'react';
import Form from './Form';
import TodoList from './TodoList';
import './App.css';

const App = () => {

  return (
    <main className="todo-list-template">
      <div className="title">
        오늘 할 일
      </div>
      <section className="form-wrapper">
        <Form />
      </section>
      <section className="todos-wrapper">
        <TodoList todos={[{ text: '1234' }]}/>
      </section>
    </main>
  );
};

export default App;
