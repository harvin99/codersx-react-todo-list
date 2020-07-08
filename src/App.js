import React from 'react';
//import logo from './logo.svg';
//import './App.css';

const todoList = [
  'Make coffe',
  'Go Shopping',
  'Wash Clothes',
  'CLear Room'
] 
function App() {
  const mapList = todoList.map(item => <li> {item} </li>)
  return (
    <div> 
      <h1> To do list </h1>
      <ul> {mapList} </ul>
    </div>
  );
}

export default App;
