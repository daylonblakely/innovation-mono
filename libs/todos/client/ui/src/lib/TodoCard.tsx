import './client-ui.css';
import React from 'react';
import { Todo } from '@innovation-mono/todos/types';

export interface TodoCardProps extends Todo {
  isSelected: boolean;
}

export const TodoCard: React.FC<TodoCardProps> = ({
  title,
  description,
  completed,
  isSelected,
}) => {
  return <div className="card-container">{isSelected + ''}</div>;
};

export default TodoCard;
