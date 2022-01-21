import ArticlePage from '../../../pages/ArticlePage/ArticlePage';
import ArticleItem from '../ArticleItem/ArticleItem';
import { Link } from 'react-router-dom';
import './ArticlesList.scss';

const generateArticleItems = (numberOfItems) => {
  const ArticleItems = [];
  for (let i = 0; i < numberOfItems; i++) {
    ArticleItems.push(
      <div key={`article ${i}`} className='article-item-container-margin'>
        <ArticleItem></ArticleItem>
      </div>
    );
  }

  return ArticleItems;
};

function ArticlesList({ numberOfItems }) {
  return (
    <div className='articles-container'>
      {generateArticleItems(numberOfItems)}
    </div>
  );
}

export default ArticlesList;
