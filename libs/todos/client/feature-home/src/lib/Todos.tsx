import React from 'react';
import { useGetTodosQuery } from '@innovation-mono/todos/client/data-access';
import { TodoCard } from '@innovation-mono/todos/client/ui';
import { CardList } from '@innovation-mono/shared/ui-cards';

/* eslint-disable-next-line */
export interface TodosProps {}

export function Todos() {
  const { data, isLoading } = useGetTodosQuery();

  if (isLoading) {
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
              />
            ),
          };
        })}
      />
    </div>
  );
}

export default Todos;
