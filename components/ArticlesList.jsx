import { getArticles } from "../api";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

export default function ArticlesList() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const loadingMessage = 'Articles loading...';
    const errorMessage = 'An error has occurred loading articles';

    useEffect(() => {
        getArticles()
        .then(articles => {
            setArticles(articles)
            setIsLoading(false)
            setIsError(false)
        })
        .catch((error) => {
            setIsLoading(false)
            setIsError(true)
            console.log(error)
        })
    }, []);

    isError ? errorMessage : null;

    return( isLoading ? loadingMessage : 
        <>
            {articles.map((article) => (
                <ArticleCard key={article.article_id} article={article} />
            ))}
        </>
    )
}