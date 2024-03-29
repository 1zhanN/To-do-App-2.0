import React, { useState } from 'react';
import './MainContent.css';

const MainContent = () => {
  const [inputData, setInputData] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!inputData) {
      alert("Task cannot be empty!");
    } else {
      setTasks([...tasks, { text: inputData, checked: false }]);
      setInputData('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((_, index) => index !== id);
    setTasks(updatedTasks);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked;
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h2>To-Do List <img src="images/icon.png" alt="" /></h2>
        <div className="row">
          <input
            type="text"
            id="input-box"
            placeholder=" Add your Task"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            onKeyDown={handleKeyDown} // Handle Enter key press
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ul id="list-container">
          {tasks.map((task, index) => (
            <li key={index} className={task.checked ? "checked" : ""} onClick={() => toggleTask(index)}>
              <span className="task-text">{task.text}</span>
              <span className="cross-button" onClick={(e) => { e.stopPropagation(); removeTask(index); }}>{'\u00d7'}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainContent;
