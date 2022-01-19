import React from "react";
import { useParams } from "react-router-dom";

const Four = (props) => {
    const {number} = useParams();

    return (
        <p>{isNaN(number) ? `The word is: ${number}` : `The number is: ${number}`} </p>
    )

}

export default Four;
