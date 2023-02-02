import axios from "axios";
import React, { useState } from "react";
import "./Selection.css";
import image from "./obi-wan.gif";

const Selection = () => {
    const [select, setSelect] = useState([]);
    const [error, setError] = useState("");
    const [data, setData] = useState({
        topic: "blank",
        id: "",
    });
    const { topic, id } = data;

    const handleSelection = (e) => {
        setSelect("");
        setData({ ...data, topic: e.target.value });
    };

    const handleId = (e) => {
        setData({ ...data, id: e.target.value });
    };

    const searchButton = (e) => {
        e.preventDefault();
        setError("");
        setSelect("");
        axios
            .get(`https://swapi.dev/api/${topic}/${id}/`)
            .then((response) => {
                setSelect(response.data);
            })
            .catch(function (error) {
                if (error.response) {
                    // La respuesta fue hecha y el servidor respondió con un código de estado
                    // que esta fuera del rango de 2xx
                    setError(error.response);
                    // console.log(error.response.data);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                } else if (error.request) {
                    // La petición fue hecha pero no se recibió respuesta
                    // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
                    // http.ClientRequest en node.js
                    // console.log(error.request);
                } else {
                    // Algo paso al preparar la petición que lanzo un Error
                    // console.log("Error", error.message);
                }
                // console.log(error.config);
            });
    };

    return (
        <>
            <form className="form1" onSubmit={searchButton}>
                <label htmlFor="select">Search for:</label>
                <select name="select" onChange={handleSelection}>
                    <option value="blank">Select 1 option</option>
                    <option value="films">Films</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="species">Species</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                </select>
                <label htmlFor="id">Id</label>
                <input type="number" name="id" placeholder="Enter a number" onChange={handleId} />
                <button type="submit">Search</button>
            </form>
            <div>
                {error ? (
                    <div>
                        <h4>These are not the droids you're looking for</h4>
                        <h3>{error.data.detail} {error.status}</h3>
                        <img src={image} alt="obi-confused" sizes="480px" />
                    </div>
                ) : ""}
                {select && topic === "blank" ? "" : ""}
                {select && topic === "films" ? (
                    <>
                        <h1>Name: {select.title}</h1>
                        <h2>Director: {select.director}</h2>
                        <h2>Producer: {select.producer}</h2>
                        <h2>Release date: {select.release_date}</h2>
                    </>
                ) : (
                    ""
                )}
                {select && topic === "people" ? (
                    <>
                        <h1>Name: {select.name}</h1>
                        <h2>Gender: {select.gender}</h2>
                        <h2>Height: {select.height}</h2>
                        <h2>Eye color: {select.eye_color}</h2>
                    </>
                ) : (
                    ""
                )}
                {select && topic === "planets" ? (
                    <>
                        <h1>Name: {select.name}</h1>
                        <h2>Population: {select.population}</h2>
                        <h2>Terrain: {select.terrain}</h2>
                        <h2>Climate: {select.climate}</h2>
                    </>
                ) : (
                    ""
                )}
                {select && topic === "species" ? (
                    <>
                        <h1>Name: {select.name}</h1>
                        <h2>Average height: {select.average_height}cm</h2>
                        <h2>Language: {select.language}</h2>
                        <h2>Skin colors: {select.skin_colors}</h2>
                    </>
                ) : (
                    ""
                )}
                {select && topic === "starships" ? (
                    <>
                        <h1>Name: {select.name}</h1>
                        <h2>Manufacturer: {select.manufacturer}</h2>
                        <h2>Model: {select.model}</h2>
                        <h2>Starship class: {select.starship_class}</h2>
                    </>
                ) : (
                    ""
                )}
                {select && topic === "vehicles" ? (
                    <>
                        <h1>Name: {select.name}</h1>
                        <h2>Manufacturer: {select.manufacturer}</h2>
                        <h2>Model: {select.model}</h2>
                        <h2>Vehicle class: {select.vehicle_class}</h2>
                    </>
                ) : (
                    ""
                )}
            </div>
        </>
    );
};

export default Selection;
