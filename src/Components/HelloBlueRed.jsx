import React from "react";
import { useParams } from "react-router-dom";

const HelloBlueRed = () => {
    const {word, color1, color2} = useParams();

    const styling= {
        backgroundColor:color2,
        color:color1
    }
    return (
        <p style={styling}> {word}</p>
    )

}


export default HelloBlueRed;