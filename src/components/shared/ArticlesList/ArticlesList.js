import { articles } from '../../../configs/articles';
import ArticleItem from '../ArticleItem/ArticleItem';
import './ArticlesList.scss';

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

function ArticlesList({ animation, numberOfItems, currentArticleId }) {
  return (
    <div className='articles-container'>
      {generateArticleItems(numberOfItems, currentArticleId, animation)}
    </div>
  );
}

export default ArticlesList;
