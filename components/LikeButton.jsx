
export default function LikeButton({ onClick, isLikeBtnDisabled }) {
    
    return (
        <button onClick={onClick } disabled={isLikeBtnDisabled} >Like</button>
    )
} 