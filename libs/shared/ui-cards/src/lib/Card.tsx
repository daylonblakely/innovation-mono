import './cards.css';
import React, { memo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';

import { useInvertedBorderRadius } from './use-inverted-border-radius';
import { useScrollConstraints } from './use-scroll-constraints';

const Overlay = ({ isSelected }: { isSelected: boolean }) => (
  <motion.div
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
    className="overlay"
  >
    <Link to="/" />
  </motion.div>
);

export interface CardProps {
  isSelected: boolean;
  id: string;
  title: string;
}

// Distance in pixels a user has to scroll a card down before we recognise
// a swipe-to dismiss action.
const dismissDistance = 150;

export const Card: React.FC<CardProps> = memo(
  ({ isSelected, id, title }) => {
    const history = useNavigate();

    const y = useMotionValue(0);
    const zIndex = useMotionValue(isSelected ? 2 : 0);

    // Maintain the visual border radius when we perform the layoutTransition by inverting its scaleX/Y
    const inverted = useInvertedBorderRadius(20);

    // We'll use the opened card element to calculate the scroll constraints
    const cardRef = useRef(null);
    const constraints = useScrollConstraints(cardRef, isSelected);

    function checkZIndex(latest: { scaleX: number }) {
      if (isSelected) {
        zIndex.set(2);
      } else if (!isSelected && latest.scaleX < 1.01) {
        zIndex.set(0);
      }
    }

    // When this card is selected, attach a wheel event listener
    const containerRef = useRef(null);

    return (
      <li ref={containerRef} className={`card`}>
        <Overlay isSelected={isSelected} />
        <motion.div
          layout
          transition={
            isSelected
              ? {
                  type: 'spring',
                  stiffness: 200,
                  damping: 12,
                }
              : { type: 'spring', stiffness: 300, damping: 35 }
          }
          className={`card-content-container ${isSelected && 'open'}`}
        >
          <motion.div
            ref={cardRef}
            className="card-content"
            style={{ ...inverted, zIndex, y }}
            drag={isSelected ? 'y' : false}
            dragConstraints={constraints}
            dragElastic={0.8}
            onDragEnd={(event, info) => {
              if (info.offset.y > dismissDistance) {
                history('/');
              }
            }}
            onUpdate={checkZIndex}
          >
            {/* {title} */}
            {isSelected + ''}
          </motion.div>
        </motion.div>
        {!isSelected && <Link to={id} className={`card-open-link`} />}
      </li>
    );
  },
  (prev, next) => prev.isSelected === next.isSelected
);

export default Card;
