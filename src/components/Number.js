import React from "react";
import { useParams } from "react-router-dom";

const Number = () => {
    const {number} = useParams();
    return (
        <div>
            <p>The number is {number}</p>
        </div>
    )
}

export default Number;