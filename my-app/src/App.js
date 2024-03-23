import { useState } from 'react';
import './App.css';
import MainContent from './components/MainContent/MainContent.js';
import AddTask from './components/AddTask/AddTask.js';

function App() {
  useState();   // hook function must be called on the top level    (inside component function)


  return (
    <div className="App">
      {/* <header className="App-header"> 
      </header> */}
      <MainContent />
    </div>
  );
}

export default App;