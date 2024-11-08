import { postComment } from "../api";
import { UserContext } from "../contexts/UserContext"
import { useContext, useState } from "react";

export default function PostComment({article_id , isPostSuccess, setPostSuccess}) {

    const {user} = useContext(UserContext);
    const [comment, setComment] = useState('');
    const [error, setError] = useState(false);
    const errorMessage = "Comment failed to post, try again.";

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            username: user,
            body: comment
        }
        postComment(article_id, newComment)
        .then(() => {
            setPostSuccess(true)
            setError(false)
            setComment('')
        })
        .catch((error) => {
            setPostSuccess(false)
            setError(true)
        })
    }

    error ? errorMessage : null;

    return (
        <div>
            {isPostSuccess ? <p>Your comment has been posted</p> : null}
            <form id="comment-form" onSubmit={handleSubmit}>
                <label>What do you think?</label>
                <br></br>
                <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Comment here..." />
                <br></br>
                <input type="submit" />
            </form>
        </div>
    )
}