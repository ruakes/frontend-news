import { useEffect, useState } from "react";

export default function DislikeButton({ onClick, isDislikeBtnDisabled }) {
    
    return (
        <button onClick={onClick } disabled={isDislikeBtnDisabled} >Dislike</button>
    )
}       