import React from 'react';
import { useDispatch } from 'react-redux';
import { doneTask, editTask, deleteTask } from '../../redux/reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './task.css';

interface TaskProps {
  id: number;
  name: string;
  completed: boolean;
}

const Task: React.FC<TaskProps> = ({ id, name, completed }) => {
  const dispatch = useDispatch();


  const handleEditTask = () => {
    const newName = prompt('Enter the new task name:', name);
    if (newName && newName.trim() !== '') {
      dispatch(editTask({ id, newName }));
    }
  };

  return (
    <li className="task-item">
      <span className={`task-name ${completed ? 'completed' : ''}`}>{name}</span>
      <div className="task-actions">
        <button onClick={() =>  dispatch(doneTask(id))} className="done-icon">
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button onClick={handleEditTask} className="edit-icon">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button onClick={() => dispatch(deleteTask(id))} className="delete-icon">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};

export default Task;
