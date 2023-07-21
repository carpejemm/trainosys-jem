import React, { useState } from 'react';
import tasksData from './data/tasks.json';
import Task from './components/Task/Task';
import AddTask from './components/AddTask/AddTask';
import './App.css'

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(tasksData);

  const handleAddTask = (task: string) => {
    if (task.trim() !== '') {
      const newTaskObj: Task = {
        id: tasks.length + 1,
        title: task,
        completed: false
      };
      setTasks([...tasks, newTaskObj]);
    }
  };

  const handleDoneTask = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleEditTask = (id: number, newName: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: newName } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id: number) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div style={{ textAlign: 'center', margin: '50px'}}>
      <h1>Task Manager</h1>
      <AddTask onAddTask={handleAddTask} />
      {tasks.length === 0 ? (
        <>
          <h1>No Tasks for today!</h1>
          <p> “When you are asked if you can do a job, tell ’em, 
            ‘Certainly I can!’ Then get busy and find out how to do it.” 
            —Theodore Roosevelt 
          </p>
        </>
      ) : (
        <ul>
          {tasks.map((task) => (
            <Task 
              key={task.id}
              id={task.id}
              completed={task.completed}
              name={task.title}
              onDoneTask={handleDoneTask}
              onEditTask={handleEditTask}
              onDeleteTask={handleDeleteTask} 
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
