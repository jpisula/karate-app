import React from 'react';
import './ArticleRow.scss';
import { BiEdit } from 'react-icons/bi';
import { CgFileRemove } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
import Button from '../../../Button/Button';
import ModalPopup from '../../../ModalPopup/ModalPopup';

const ArticleRow = ({ article }) => {
  const {
    name,
    text,
    bigImgUrl,
    smallImgUrl,
    tags,
    shortenDesc,
    category,
    id,
    createDate
  } = article;

  const handleRemoveClick = () => {
    console.log(`Usunięto ${id} Artykuł`);
  };

  return (
    <div className='article'>
      <div className='title'>{name}</div>
      <div className='img'>{bigImgUrl}</div>
      <div className='date'>{createDate}</div>
      <div className='tags'>
        {tags.map((el) => (
          <p>{el}</p>
        ))}
      </div>
      <div className='edit-or-remove'>
        <Link to={`/admin/aktualnosci/nowy/${id}`}>
          <div>
            <p>edytuj</p>
            <BiEdit />
          </div>
        </Link>
        <ModalPopup
          trigger={
            <div>
              <p>usuń</p>
              <CgFileRemove />
            </div>
          }
          text='Czy na pewno chcesz usunąć ten artykuł?'
          onYesClick={handleRemoveClick}
        />
        {/* <Popup
          trigger={

          }
          // position='center'
          modal
          nested
        >
          <div className=' popup-container'>
            <h2 className='popup-title'>
              Czy na pewno chcesz usunąć ten artykuł?
            </h2>
            <div className='popup-btns-container'>
              <Button className='popup-btn'>Tak</Button>
              <Button className='popup-btn'>Nie</Button>
            </div>
          </div>
        </Popup> */}
      </div>
    </div>
  );
};

export default ArticleRow;
