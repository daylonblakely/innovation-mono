import './cards.css';
import * as React from 'react';
import { useRoutes, useParams } from 'react-router-dom';

import { Card } from './Card';

interface CardData {
  id: string;
  title: string;
}

export interface CardListProps {
  data: CardData[];
}

const List: React.FC<CardListProps> = ({ data }) => {
  const { id } = useParams();

  return (
    <ul className="card-list">
      {data.map((item) => (
        <Card
          key={item.id}
          isSelected={id === item.id}
          id={item.id}
          title={item.title}
        />
      ))}
    </ul>
  );
};

export const CardList: React.FC<CardListProps> = ({ data }) =>
  useRoutes(
    ['/:id', '/'].map((path) => ({ path, element: <List data={data} /> }))
  );
