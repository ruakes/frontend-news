

const CommentCard = (props) => {
    const { comment } = props;

    return (
        <li className="comment">
            <h4>{comment.author}</h4>
            <p>Votes: {comment.votes}</p>
            <p>{comment.body}</p>
        </li>
    );
  };
  
  export default CommentCard;