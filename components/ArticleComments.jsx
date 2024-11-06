import { getArticleComments } from "../api";
import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";

export default function ArticleComments({article_id}) {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const loadingMessage = 'Comments loading...';

    useEffect(() => {
        getArticleComments(article_id)
            .then(comments => {
            setComments(comments)
            setIsLoading(false)
        })
        .catch((error) => {
            setIsLoading(false)
            console.log(error)
        })
    }, []);
    
    return (isLoading ? loadingMessage : 
        <>
            {comments.map((comment) => {
               return <CommentCard key={comment.comment_id} comment={comment}/>
            })}
        </>
    )
}