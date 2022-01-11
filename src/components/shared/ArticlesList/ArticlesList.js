import ArticleItem from '../ArticleItem/ArticleItem';
import './ArticlesList.scss';

function ArticlesList() {
  return (
    <div className='article-list-container'>
      <ArticleItem></ArticleItem>
      <ArticleItem></ArticleItem>
      <ArticleItem></ArticleItem>
    </div>
  );
}

export default ArticlesList;
