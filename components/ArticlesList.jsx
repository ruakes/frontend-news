import { getArticles } from "../api";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

export default function ArticlesList() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then(articles => {
            setArticles(articles)
        })
    }, []);

    return(
        <>
            {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
        </>
    )
}