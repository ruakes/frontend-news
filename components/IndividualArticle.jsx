import { getArticlesById, patchArticleVotes } from "../api"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleComments from "./ArticleComments";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";

export default function IndividualArticle() {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [votes, setVotes] = useState(0);
    const [isError, setIsError] = useState(false);
    const [isVoteError, setIsVoteError] = useState(false);
    const [isLikeBtnDisabled, setLikeBtnDisabled] = useState(false);
    const [isDislikeBtnDisabled, setDislikeBtnDisabled] = useState(false);

    const { article_id } = useParams();

    const loadingMessage = 'Article loading...';
    const errorMessage = 'An error has occurred loading this article';
    const voteErrorMessage = 'An error has occurred voting on this article';

    useEffect(() => {
        getArticlesById(article_id)
            .then((article) => {
            setArticle(article)
            setVotes(article.votes)
            setIsLoading(false)
            setIsError(false)
        })
        .catch((error) => {
            setIsLoading(false)
            setIsError(true)
        })
    }, [article_id]);

    const handleVote = (num) => {
        getArticlesById(article_id)
        .then((article) => {
            const incVotes = {inc_votes: num};
            setVotes(article.votes + num);
            patchArticleVotes(article_id, incVotes);
            (num > 0) ? setLikeBtnDisabled(true) : setDislikeBtnDisabled(true)
            setIsVoteError(false)
        })
        .catch((error) => {
            setIsVoteError(true)
        })
    }

    isError ? errorMessage : null;
    isVoteError ? voteErrorMessage : null;

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
            <section className="article-votes">
            <h3>Votes: {votes}</h3>
                <LikeButton onClick={() => {handleVote(1)}} isLikeBtnDisabled={isLikeBtnDisabled}/>
                <DislikeButton onClick={() => {handleVote(-1)}} isDislikeBtnDisabled={isDislikeBtnDisabled}/>
            </section>
            <section className="article-comments">

            <section className="article-comments">
                <ArticleComments article={article} article_id={article_id}/>
            </section>
            </section>
        </>
    )
}