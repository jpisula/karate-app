import axios from 'axios';
import { useEffect, useState } from 'react';
import ArticleItem from '../ArticleItem/ArticleItem';
import './ArticlesList.scss';

const API_URL = 'http://localhost:49153/api/v1';

const ArticlesList = ({ animation, numberOfItems, currentArticleId }) => {
  const [articles, setArtciles] = useState([]);

  useEffect(async () => {
    const data = await axios.get(
      `${API_URL}/articles?page=1&perpage=${numberOfItems}`
    );
    setArtciles(data.data.data);
    console.log(data.data.data);
  }, []);

  const generateArticleItems = (numberOfItems, currentArticleId, animation) => {
    const ArticleItems = [];
    for (let i = 0; i < numberOfItems; i++) {
      const article = articles[i];
      if (i === Number.parseInt(currentArticleId)) {
        numberOfItems++;
      } else {
        ArticleItems.push(
          <div
            key={`article ${i}`}
            data-aos={animation}
            className='article-item-container-margin'
          >
            <ArticleItem article={article} id={i} />
          </div>
        );
      }
    }

    return ArticleItems;
  };

  return (
    <div className='articles-container'>
      {generateArticleItems(numberOfItems, currentArticleId, animation)}
    </div>
  );
};

export default ArticlesList;
