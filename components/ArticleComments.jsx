import { getArticleComments } from "../api";
import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";

export default function ArticleComments({article_id}) {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isPostSuccess, setPostSuccess] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false)
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
    }, [isPostSuccess, isDeleted]);
    
    return (isLoading ? loadingMessage : 
        <div>
            <h3>Comments</h3>
            <PostComment article_id={article_id} isPostSuccess={isPostSuccess} setPostSuccess={setPostSuccess}/>
            <ul>
            { comments.length ? 
            comments.map((comment) => {
                return <CommentCard key={comment.comment_id} comment={comment} setIsDeleted={setIsDeleted}/>
            }) : <p>No comments</p>}
            </ul>
        </div>
    )
}