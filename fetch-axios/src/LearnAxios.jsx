import axios from "axios";
import { useState, useEffect } from "react";

const LearnAxios = () => {

    const endPointURL = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        axios.get(endPointURL)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <hr />

        </>
    )
}

export default LearnAxios;

// https://www.freecodecamp.org/news/how-to-use-axios-with-react/