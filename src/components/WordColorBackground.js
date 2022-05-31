import React from "react";
import { useParams } from "react-router-dom";

const WordColorBackground = () => {
    const {word, color1, backgroundColor1} = useParams();

    const theStyle = {
        color: {color1},
        backgroundColor: {backgroundColor1}
    };
    return (
        <div style={theStyle}>
            <p style={{color:color1, backgroundColor: backgroundColor1}}>The word is {word}</p>
        </div>
    )
}

export default WordColorBackground;