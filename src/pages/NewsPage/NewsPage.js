import ArticlesList from '../../components/shared/ArticlesList/ArticlesList';
import './NewsPage.scss';
import React, { useEffect, useState } from 'react';
import LeftArrow from '../../components/Icons/LeftArrow';
import RightArrow from '../../components/Icons/RightArrow';
import axios from 'axios';
import Loader from '../../components/shared/Loader/Loader';

const API_URL = 'http://localhost:49153/api/v1';

const itemsPerPage = window.innerWidth > 1440 ? 12 : 10;

const NewsPage = () => {
  const [loader, setLouder] = useState(true);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const [categories, setcategories] = useState([]);
  const [filteredByCategory, setFilteredByCategory] = useState('all');
  const [articles, setArtciles] = useState({});

  // let numberOfItems = 8;

  const articleRequest = async (isFilteredByCategory) => {
    const articlesResult = await axios.get(
      `${API_URL}/articles?page=${page}&perpage=${itemsPerPage}${
        isFilteredByCategory ? `&filterByCategory=${filteredByCategory}` : ''
      }
      `
    );

    setArtciles({ articles: articlesResult.data.data });
    setPagination(articlesResult.data.pagination);
  };

  useEffect(async () => {
    const categories = await axios.get(`${API_URL}/categories`);
    setcategories(categories.data.data);
  }, []);

  useEffect(async () => {
    setLouder(true);
    await articleRequest(filteredByCategory !== 'all');
    setLouder(false);
  }, [page, filteredByCategory]);

  const changePage = (direction) => {
    if (direction === 'LEFT' && pagination.currentPage > 1) {
      setPage(page - 1);
    } else if (
      direction === 'RIGHT' &&
      pagination.currentPage < pagination.pagesCount
    ) {
      setPage(page + 1);
    }
  };

  const getPagination = () => {
    const paginationElements = [];

    for (let i = 1; i < pagination.pagesCount + 1; i++) {
      paginationElements.push(
        <div
          key={`pagination-tile-${i}`}
          className={`pagination-tile ${
            i === pagination.currentPage ? 'pagination-active' : ''
          }`}
          onClick={() => {
            if (i !== pagination.currentPage) {
              setPage(i);
            }
          }}
        >
          {i}
        </div>
      );
    }
    return paginationElements;
  };

  return (
    <>
      <div className='news-page-content'>
        <section className='news-list'>
          <div className='container'>
            <h1 className='news-h2'>Aktualności</h1>

            <form className='inputs-container'>
              <div className='input-container'>
                <label htmlFor='sort'>filtruj po kategorii: </label>
                <select
                  name='sorting'
                  className='select'
                  defaultValue={'all'}
                  onChange={(e) => setFilteredByCategory(e.target.value)}
                >
                  <option value={'all'}>-- wszystkie --</option>
                  {categories.map((el) => (
                    <option value={el.id} key={el.id}>
                      {el.name}
                    </option>
                  ))}
                </select>
              </div>
            </form>
            {loader && <Loader />}
            {!loader && (
              <section>
                <ArticlesList
                  className='articles-list'
                  numberOfItems={itemsPerPage}
                  articlesToShow={articles.articles}
                />

                {articles.articles.length > 0 && (
                  <div className='pagination-container'>
                    <div className='pagination-content'>
                      <LeftArrow
                        className='pagination-arrow'
                        onClick={() => changePage('LEFT')}
                      />
                      <div className='pagination'>{getPagination()}</div>
                      <RightArrow
                        className='pagination-arrow'
                        onClick={() => changePage('RIGHT')}
                      />
                    </div>
                  </div>
                )}
              </section>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default NewsPage;
