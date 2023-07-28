import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/reducer';
import './add-task.css';

const AddTask: React.FC = () => {
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      dispatch(addTask(newTask));
      setNewTask('');
    }
  };

  return (
    <div className="add-task-container">
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        className="add-task-input"
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask} className="add-task-button">
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
