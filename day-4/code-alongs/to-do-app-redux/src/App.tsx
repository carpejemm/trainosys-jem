import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import Task from './components/Task/Task';
import AddTask from './components/AddTask/AddTask';
import './App.css';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const tasks: Task[] = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', margin: '50px'}}>
      <h1>Task Manager</h1>
      <AddTask />
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
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
