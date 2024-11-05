import { Link } from "react-router-dom";

const ArticleCard = (props) => {
  const { article } = props;
  return (
    <section className="display-item">
      <Link to={`/articles/${article.article_id}`}>
        <h3>{article.title}</h3>
      </Link>
      <Link to={`/articles/${article.article_id}`}>
        <h3>{article.author}</h3>
      </Link>
      <Link to={`/articles/${article.article_id}`}>
        <img src={article.article_img_url} />
      </Link>
    </section>
  );
};

export default ArticleCard;