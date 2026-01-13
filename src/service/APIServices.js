import { json } from "react-router-dom"

export const getCharacter = async (dispatch) => {
    const response = await fetch (
        `https://thesimpsonsapi.com/api/characters`
    )

    const data = await response.json()
    console.log(data);
    
    dispatch ({type: "set_character", payload: data.results})
}

export const getLocation = async (dispatch) => {
    const response = await fetch (
        `https://thesimpsonsapi.com/api/locations`
    )

    const data = await response.json()
    console.log(data);
    
    dispatch ({type: "set_location", payload: data.results})
}