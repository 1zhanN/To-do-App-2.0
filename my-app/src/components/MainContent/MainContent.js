import React, {useState} from 'react';
import './MainContent.css';

const MainContent = () => {
  
  const [inputData, setInputData] = useState('');
  const [task, setTask] = useState([]);



  const addTask = () => {
    if (!inputData){
      alert("abay khali pili nahi chalega")
    }
    else{
      setTask([...task, inputData])
      setInputData('')
    
    }

  };

  const removeTask = (id) => {
    const updatedTask = task.filter((element, index) => {
      return index !== id;
    });
    
    setTask(updatedTask)

  };

  return (
    <div className="container">
      <div className="todo-app">
        <h2>To-Do List <img src="images/icon.png" alt=""/></h2>
        <div className="row">
          <input type="text" id="input-box" placeholder=" Add your Task" 
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>
        {
          task.map((element, index) =>{
            return(
              <ul id="list-container" key={index}>
              <li>{element}<span className="cross-button" onClick={() => removeTask(index)}>{'\u00d7'}</span></li>
              
              {/* <li>Task 2</li>
              <li>Task 3</li> */}
            </ul>
            )

          })
        }

      </div>
    </div>
  );
};

export default MainContent;
