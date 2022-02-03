import ArticleListContainer from '../../../components/shared/ArticleListContainer/ArticleListContainer';
import './InfoPageTemplate.scss';

function InfoPageTemplate({ children }) {
  return (
    <article className='info-page'>
      <section className='main-content'>{children}</section>
      <section className='aside-content'>
        <ArticleListContainer />
      </section>
    </article>
  );
}

export default InfoPageTemplate;
