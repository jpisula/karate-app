import React from 'react';
import './ColorsDescription.scss';

const ColorsDescription = () => {
  const colors = [
    {
      color: 'rgb(175, 233, 175)',
      meaning: ' - obecny dzień'
    },
    {
      color: 'rgb(170, 32, 32)',
      meaning: ' - turniej'
    },
    {
      color: 'rgb(24, 24, 204)',
      meaning: ' - seminarium'
    },
    {
      color: 'rgb(0, 177, 0)',
      meaning: ' - obóz'
    },
    {
      color: 'rgb(141, 141, 141)',
      meaning: ' - wydarzenie, które juz się odbyło'
    }
  ];

  const generateColorTiles = () => {
    let colorTiles = [];
    let i = 1;
    for (const color of colors) {
      colorTiles.push(
        <li className='color-list-item' style={{ gridRowStart: i }}>
          <div className='color' style={{ backgroundColor: color.color }}></div>
          <div className='meaning'>{color.meaning}</div>
        </li>
      );
      i++;
    }

    return colorTiles;
  };

  return <ul className='colors-list'>{generateColorTiles()}</ul>;
};

export default ColorsDescription;
