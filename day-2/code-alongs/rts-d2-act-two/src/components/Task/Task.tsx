import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './task.css';

interface TaskProps {
  id: number;
  name: string;
  completed: boolean;
  onDoneTask: (id: number) => void;
  onEditTask: (id: number, newName: string) => void;
  onDeleteTask: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ id, name, completed, onDoneTask, onEditTask, onDeleteTask }) => {
  const handleDoneTask = () => {
    onDoneTask(id);
  };

  const handleEditTask = () => {
    const newName = prompt('Enter the new task name:', name);
    if (newName && newName.trim() !== '') {
      onEditTask(id, newName);
    }
  };

  const handleDeleteTask = () => {
    onDeleteTask(id);
  };

  return (
    <li className="task-item">
      <span className={`task-name ${completed ? 'completed' : ''}`}>{name}</span>
      <div className="task-actions">
        <button onClick={handleDoneTask} className="done-icon">
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button onClick={handleEditTask} className="edit-icon">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button onClick={handleDeleteTask} className="delete-icon">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};

export default Task;
