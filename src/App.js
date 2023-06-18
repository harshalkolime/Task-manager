import { useState } from 'react';
import { Header } from './components/header';
import { AddTask } from './components/addTask';
import { ShowTask } from './components/showTask';

import './App.css';



function App() {

  const [tasklist, setTasklist]= useState([]);
  const [task, setTask]= useState([]);


  return (
    <div className='Main-container'>

    <Header />
    <AddTask 
    tasklist={tasklist} 
    setTasklist={setTasklist}
    task={task}
    setTask={setTask}
    />
    
    <ShowTask 
    tasklist={tasklist}
     setTasklist={setTasklist}
     task={task}
     setTask={setTask}
     />

    </div>
  );
}

export default App;
