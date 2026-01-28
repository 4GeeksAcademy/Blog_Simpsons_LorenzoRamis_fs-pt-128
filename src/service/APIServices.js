import { json } from "react-router-dom"

const BASE_URL = `https://thesimpsonsapi.com/api`
export const getCharacters = async (dispatch) => {
    const response = await fetch (
        `https://thesimpsonsapi.com/api/characters`
    )

    const data = await response.json()
    console.log(data);
    
    dispatch ({type: "set_character", payload: data.results})
}

export const getLocations = async (dispatch) => {
    const response = await fetch (
        `https://thesimpsonsapi.com/api/locations`
    )

    const data = await response.json()
    console.log(data);
    
    dispatch ({type: "set_location", payload: data.results})
}

export const getLocation = async (id) => {
    const response = await fetch ( 
        `${BASE_URL}/locations/${id}`
    )

    const data = await response.json()
    return data
}

export const getCharacter = async (id) => {
    const response = await fetch ( 
        `${BASE_URL}/characters/${id}`
    )

    const data = await response.json()
    return data
}