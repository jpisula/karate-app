import { articles } from '../../../database/articles/articles';
import ArticleItem from '../ArticleItem/ArticleItem';
import './ArticlesList.scss';

const generateArticleItems = (numberOfItems, animation) => {
  const ArticleItems = [];
  for (let i = 0; i < numberOfItems; i++) {
    const article = articles[i];
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

  return ArticleItems;
};

function ArticlesList({ animation, numberOfItems }) {
  return (
    <div className='articles-container'>
      {generateArticleItems(numberOfItems, animation)}
    </div>
  );
}

export default ArticlesList;
