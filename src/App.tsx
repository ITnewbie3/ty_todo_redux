import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ContainerCount from './containers/ContainerCount';
import TodoApp from './containers/TodoApp';

function App() {
  return (
    <div className="App">
      <TodoApp/>
    </div>
  );
}

export default App;
