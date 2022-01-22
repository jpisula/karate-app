import { articles } from '../../../database/articles/articles';
import ArticleItem from '../ArticleItem/ArticleItem';
import './ArticlesList.scss';

const generateArticleItems = (numberOfItems) => {
  const ArticleItems = [];
  for (let i = 0; i < numberOfItems; i++) {
    const article = articles[i];
    ArticleItems.push(
      <div key={`article ${i}`} className='article-item-container-margin'>
        <ArticleItem article={article} />
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
