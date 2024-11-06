import { getArticles } from "../api";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

export default function ArticlesList() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const loadingMessage = 'Articles loading...';

    useEffect(() => {
        getArticles().then(articles => {
            setArticles(articles)
            setIsLoading(false)
        })
        .catch((error) => {
            setIsLoading(false)
            return error
        })
    }, []);

    return( isLoading ? loadingMessage : 
        <>
            {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
        </>
    )
}