import './App.css'
import { useState } from "react";
import CreateTask from './components/AddTaskForm';
import TaskCard from './components/Task';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (taskForm) => {
    const addNewTask = { id: tasks.length +1, text: taskForm, completed: false }
    setTasks([...tasks, addNewTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const markAsComplete = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task)
    )
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
