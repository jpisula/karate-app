import React from 'react';
import './SectionTile.scss';

const SectionTile = ({ place }) => {
  return (
    <div className='section-tile'>
      <div className='place'>{place}</div>
      <div className='more-info'>Kliknij, aby zobaczyć informacje o sekcji</div>
    </div>
  );
};

export default SectionTile;
