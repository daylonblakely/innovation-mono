import React from 'react';
import {
  useGetTodosQuery,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from '@innovation-mono/todos/client/data-access';
import { TodoCard } from '@innovation-mono/todos/client/ui';
import { CardList } from '@innovation-mono/shared/ui-cards';

/* eslint-disable-next-line */
export interface TodosProps {}

export function Todos() {
  const { data, isLoading } = useGetTodosQuery();
  const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation();
  const [updateTodo, { isLoading: isUpdating }] = useUpdateTodoMutation();

  if (isLoading || isDeleting || isUpdating) {
    return <div>Loading...</div>;
  }

  if (!data?.length) {
    return <div>No data....</div>;
  }

  return (
    <div>
      <CardList
        data={data.map(({ _id, title, description, completed }) => {
          return {
            id: _id.toString(),
            element: (
              <TodoCard
                title={title}
                description={description}
                completed={completed}
                isSelected={false}
                onComplete={() =>
                  updateTodo({ id: _id.toString(), completed: true })
                }
                onDelete={() => deleteTodo(_id.toString())}
              />
            ),
          };
        })}
      />
    </div>
  );
}

export default Todos;
