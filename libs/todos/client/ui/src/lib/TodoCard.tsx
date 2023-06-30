import './client-ui.css';
import React from 'react';
import { Todo } from '@innovation-mono/todos/types';

export interface TodoCardProps extends Partial<Todo> {
  isSelected: boolean;
}

export const TodoCard: React.FC<TodoCardProps> = ({
  title,
  description,
  completed,
  isSelected,
}) => {
  return (
    <div className="todoCard">
      <div className="todoCard-header">
        <h2>{title}</h2>
      </div>
      <div className="todoCard-content">
        <p>{description}</p>
      </div>
      {isSelected ? (
        <div className="todoCard-footer">
          <button>Button 1</button>
          <button>Button 2</button>
        </div>
      ) : null}
    </div>
  );
};

export default TodoCard;
