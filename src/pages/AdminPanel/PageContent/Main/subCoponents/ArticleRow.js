import React, { useState } from 'react';
import './ArticleRow.scss';
import { BiEdit } from 'react-icons/bi';
import { CgFileRemove } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
import Button from '../../../Button/Button';
import ModalPopup from '../../../ModalPopup/ModalPopup';
import { TiArrowMaximiseOutline } from 'react-icons/ti';
import axios from 'axios';

const API_URL = 'http://api.gancle-studio.pl/api/v1';

const ArticleRow = ({ article }) => {
  const {
    title,
    text,
    bigImgUrl,
    bigImgAlt,
    smallImgAlt,
    smallImgUrl,
    tags,
    shortenDesc,
    category,
    id,
    createdAt
  } = article;

  const [deleted, setDeleted] = useState(false);

  const handleRemoveClick = async () => {
    console.log(`Usunięto ${id} Artykuł`);
    await axios.delete(`${API_URL}/articles/${id}`);
    setDeleted(true);
  };

  if (deleted) {
    return null;
  }

  return (
    <div className='article'>
      <div className='title'>{title}</div>
      <div className='img'>
        <a
          href={`http://api.gancle-studio.pl/uploads/photos/articles/${bigImgUrl}`}
          target={'_blank'}
        >
          LINK
        </a>
      </div>
      <div className='date'>{createdAt}</div>
      <div className='tags'>
        {tags.map((el, index) => (
          <p key={`p-${id}-${index}`}>{el}</p>
        ))}
      </div>
      <div className='edit-or-remove'>
        <Link to={`/admin/aktualnosci/nowy/${id}`}>
          <div
          // onClick={() => {
          //   console.log({
          //     title: name,
          //     text: text
          //   });
          //   console.log({
          //     bigimg: bigImgUrl,
          //     bigimgAlt: bigImgAlt,
          //     smallimg: smallImgUrl,
          //     smallimgAlt: smallImgAlt
          //   });
          // }}
          >
            <p>edytuj</p>
            <BiEdit />
          </div>
        </Link>
        <ModalPopup
          trigger={
            <div className='remove-btn'>
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
