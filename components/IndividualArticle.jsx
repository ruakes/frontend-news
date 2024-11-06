import { getArticlesById } from "../api"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleComments from "./ArticleComments";

export default function IndividualArticle() {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { article_id } = useParams();
    const loadingMessage = 'Article loading...';

    useEffect(() => {
        getArticlesById(article_id)
            .then((article) => {
            setArticle(article)
            setIsLoading(false)
        })
        .catch((error) => {
            setIsLoading(false)
            console.log(error)
            return error
        })
    }, [article_id]);

    return (isLoading ? loadingMessage :
        <>
            <section className="article-header">
                <img src={article.article_img_url} ></img>
                <h1>{article.title}</h1>
                <h2>Author: {article.author}</h2>
            </section>
            <section className="article-body">
                <p>{article.body}</p>
            </section>
            <h2>Comments</h2>
            <ul className="article-comments">
                <ArticleComments article_id={article_id}/>
            </ul>
        </>
    )
}