import React from 'react';
import { useDispatch } from 'react-redux';
import { doneTask, editTask, deleteTask } from '../../redux/reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './task.css';
// import { RootState } from '../../redux/store';


interface TaskProps {
  id: number;
  name: string;
  completed: boolean;
}

const Task: React.FC<TaskProps> = ({ id, name, completed }) => {
  // const tasks: Task[] = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();


  const handleEditTask = () => {
    const newNameeee = prompt('Enter the new task name:', name);
    if (newNameeee && newNameeee.trim() !== '') {
      dispatch(editTask({ id, newNameeee }));
    }
  };

  return (
    <li className="task-item">
      <span className={`task-name ${completed ? 'completed' : ''}`}>{name}</span>
      <div className="task-actions">
        {/* id ==> action.payload */}
        <button onClick={() =>  dispatch(doneTask(id))} className="done-icon">
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button onClick={handleEditTask} className="edit-icon">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button onClick={() => dispatch(deleteTask(id))} className="delete-icon"> {}
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};

export default Task;
