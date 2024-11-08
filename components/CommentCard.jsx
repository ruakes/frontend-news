import { deleteComment } from "../api";
import { useState } from "react";

const CommentCard = (props) => {
    const { comment , setIsDeleted } = props;
    const [error, setError] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const errorMessage = "Failed to delete comment, try again.";

    const handleDelete = (e) => {
        console.log(comment.comment_id)
        e.preventDefault();
        deleteComment(comment.comment_id)
        .then(() => {
            setIsDeleted(true)
            setIsDeleting(true)
            setError(false)
        })
        .catch((error) => {
            setIsDeleted(false)
            setIsDeleting(false)
            setError(true)
        })
    
    }

    error ? errorMessage : null;

    return (
        <li className="comment">
            <h4>{comment.author}</h4>
            <p>Votes: {comment.votes}</p>
            <p>{comment.body}</p>
            <button type="button" value={comment.comment_id} onClick={handleDelete}> {isDeleting? "Comment deleting" : "Delete comment"}</button>
        </li>
    );
  };
  
  export default CommentCard;