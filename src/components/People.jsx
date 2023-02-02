import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const People = () => {

    let { id } = useParams("");

    const [select, setSelect] = useState("");

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(response => response.json())
            .then(json => setSelect(json));
    }, [])
    console.log(select);
    return (
        <div>
            <h1>Name: {select.name}</h1>
            <h2>Gender: {select.gender}</h2>
            <h2>Height: {select.height}</h2>
            <h2>Eye color: {select.eye_color}</h2>
        </div>
    )
}

export default People