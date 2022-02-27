import React from 'react';
import { Link } from 'react-router-dom';
import PlusIcon from '../Sections/icons/PlusIcon';
import SectionTile from '../Sections/SectionTile/SectionTile';
import './InstructorsAndHelpers.scss';
import InstructorsAndHelpersTile from './InstructorsAndHelpersTile';

const InstructorsAndHelpers = () => {
  const InstructorsAndHelpersData = {
    people: [
      {
        id: 0,
        name: 'bodziony',
        content: 'dsjkgfsfjdglsfhfghbchdvjf'
      },
      {
        id: 1,
        name: 'lol',
        content: 'dsjkgfsfjdglsfhfghbchdvjf'
      },
      {
        id: 2,
        name: 'hgsaudh',
        content: 'dsjkgfsfjdglsfhfghbchdvjf'
      },
      {
        id: 3,
        name: 'hmm',
        content: 'dsjkgfsfjdglsfhfghbchdvjf'
      }
    ]
  };

  return (
    <main>
      <div className='container'>
        <h1>Instruktorzy i pomocnicy</h1>
        <div className='section-tiles'>
          {InstructorsAndHelpersData.people.map((el) => (
            <InstructorsAndHelpersTile name={el.name} id={el.id} />
          ))}

          <Link to='/admin/instruktorzy-i-pomocnicy/dodaj'>
            <div className='add-section-tile'>
              <h2>DODAJ NOWEGO INSTRUKTORA LUB POMOCNIKA</h2>
              <PlusIcon className='plus' />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default InstructorsAndHelpers;
