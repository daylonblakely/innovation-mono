import './cards.css';
import * as React from 'react';
import { useRoutes, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { Card } from './Card';

// const Overlay = ({ isSelected }: { isSelected: boolean }) => (
//   <motion.div
//     initial={false}
//     animate={{ opacity: isSelected ? 1 : 0 }}
//     transition={{ duration: 0.2 }}
//     style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
//     className="overlay"
//   >
//     <Link to="/" />
//   </motion.div>
// );

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
    <>
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
      {/* <Overlay isSelected={data.map(({ id }) => id).includes(id as string)} /> */}
    </>
  );
};

export const CardList: React.FC<CardListProps> = ({ data }) =>
  useRoutes(
    ['/:id', '/'].map((path) => ({ path, element: <List data={data} /> }))
  );
