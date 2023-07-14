import './client-ui.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Todo } from '@innovation-mono/todos/types';

export interface TodoCardProps extends Partial<Todo> {
  isSelected: boolean;
  onComplete: () => void;
  onDelete: () => void;
}

export const TodoCard: React.FC<TodoCardProps> = ({
  title,
  description,
  completed,
  isSelected,
  onComplete,
  onDelete,
}) => {
  return (
    <div className={`todoCard ${completed && 'complete'}`}>
      <div className="todoCard-header">
        <h2>{title}</h2>
      </div>
      <div className="todoCard-content">
        <p>{description}</p>
      </div>
      {isSelected ? (
        <div className="todoCard-footer">
          {!completed ? (
            <Link to="/">
              <button onClick={onComplete}>Set as Complete</button>
            </Link>
          ) : null}
          <Link to="/">
            <button onClick={onDelete}>Delete</button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default TodoCard;
