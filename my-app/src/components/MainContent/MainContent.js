import React from 'react';
import './MainContent.css';

const MainContent = () => {
  const addTask = () => {
    // Add your task handling logic here
    console.log('Task added');
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h2>To-Do List <img src="images/icon.png" alt=""/></h2>
        <div className="row">
          <input type="text" id="input-box" placeholder=" Add your Task"/>
          <button onClick={addTask}>Add</button>
        </div>
        <ul id="list-container">
          <li className="checked">Task 1</li>
          <li>Task 2</li>
          <li>Task 3</li>
        </ul>
      </div>
    </div>
  );
};

export default MainContent;
