import React from "react";
import { useParams } from "react-router-dom";

const Hello= (props) => {
    const {word} = useParams();

    return (
        <p>The word is: {word}</p>
    )

}

export default Hello;