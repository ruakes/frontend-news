import { getArticlesById } from "../api"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function IndividualArticle() {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { article_id } = useParams();
    const loadingMessage = 'Article loading...';

    useEffect(() => {
        getArticlesById(article_id).then((article) => {
            setArticle(article)
            setIsLoading(false)
        })
        .catch((error) => {
            setIsLoading(false)
            return error
        })
    }, [article_id]);

    return (isLoading ? loadingMessage :
        <>
        <section className="article-header">
            <img src={article.article_img_url} ></img>
            <h2>{article.title}</h2>
            <h3>{article.author}</h3>
        </section>
        <section className="article-body">
            <p>{article.body}</p>
        </section>
        <section className="article-comments">
            
        </section>

        </>
    )
}