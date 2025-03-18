import './App.css'
import { useState, useEffect } from "react";
import CreateTask from './components/AddTaskForm';
import TaskCard from './components/Task';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: false },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  useEffect(() => {
    const localTasks = localStorage.getItem("tasks")
      if(localTasks){
        setTasks(JSON.parse(localTasks))
      }
    }, [])

  const addTask = (taskForm) => {
    const addNewTask = { id: tasks.length +1, text: taskForm, completed: false }
    const updatedTasks = [...tasks, addNewTask]
    setTasks(updatedTasks)
    localStorage.setItem("tasks", JSON.stringify(updatedTasks))
  }

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks(updatedTasks)
    localStorage.setItem("tasks", JSON.stringify(updatedTasks))
  }

  const markAsComplete = (id) => {
    const updatedTasks = tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task)
    setTasks(updatedTasks)
    localStorage.setItem("tasks", JSON.stringify(updatedTasks))
  }

  return (
    <div className='root-div'>
      <CreateTask addTask={addTask}/>
        <div className='task-container'>
          {tasks.map((task) => 
          <TaskCard key={task.id} task={task} deleteTask={deleteTask} markAsCompleted={markAsComplete} />)}
        </div>
    </div>
  );
};

export default App;
