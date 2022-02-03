import { useState } from 'react';
import './DayTile.scss';
import Modal from './Modal';

const DayTile = ({ event, startDay, i, className }) => {
  const [isEventModalDisplayed, setIsEventModalDisplayed] = useState(false);
  return (
    <>
      <div
        className={className}
        style={{ gridColumnStart: `${((startDay + i - 1) % 7) + 1}` }}
        onClick={() =>
          event !== undefined ? setIsEventModalDisplayed(true) : null
        }
      >
        {i + 1}
      </div>
      {isEventModalDisplayed && (
        <Modal
          event={event}
          setIsEventModalDisplayed={setIsEventModalDisplayed}
          isEventModalDisplayed={isEventModalDisplayed}
        />
      )}
    </>
  );
};

export default DayTile;
