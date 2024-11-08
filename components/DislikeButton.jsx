
export default function DislikeButton({ onClick, isDislikeBtnDisabled }) {
    
    return (
        <button onClick={onClick } disabled={isDislikeBtnDisabled} >Dislike</button>
    )
}       