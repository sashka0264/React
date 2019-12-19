import React from 'react';
import img from "./error.jpg";

const ErrorMessage = () => {
    return (
        <>
            {/* <img src={process.env.PUBLIC_URL + "/img/error.jpg"} alt="error"></img> */}
            <img src={img} alt="error"></img>
            <span>Произошла ошибка</span>
        </>
    )
}

export default ErrorMessage;