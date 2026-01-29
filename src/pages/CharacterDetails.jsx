import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useEffect, useState } from "react"
import { getCharacter } from "../service/APIServices"
import { Link } from "react-router-dom";

export const CharacterDetails = () => {

    const { id } = useParams()

    const [character, setCharacter] = useState()

    const { store, dispatch } = useGlobalReducer()

    const getCharacterData = async () => {
        const characterData = await getCharacter(id)
        setCharacter(characterData)
    }

    useEffect(() => {
        getCharacterData()
    }, [])

    if (!character) {
        return <div className="container mt-5">Cargando datos...</div>;
    }

    // const randomPhrase = character.phrases.length > 0 ? character.phrases[Math.floor(Math.random() * character.phrases.length)] : "No hay frases disponibles";

    const addFav = () => {
        dispatch({ type: 'add_fav', payload: character })
    }

    return (
        <>
            <div className="container mt-4">
                <Link to="/">
                    <button className="btn m-2"><i className="fa-solid fa-arrow-left"></i> Back</button>
                </Link>
                <div className="d-flex">
                    <div className="card mb-3" style={{ width: "1080px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={`https://cdn.thesimpsonsapi.com/1280/character/${character.id}.webp`} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4">
                                <div className="card-body">
                                    <h4 className="card-title">{character.name}</h4>
                                    <p className="card-text">Age: {character.age}</p>
                                    <p className="card-text">Birthdate: {character.birthdate}</p>
                                    <p className="card-text">Gender: {character.gender}</p>
                                    <p className="card-text">Occupation: {character.occupation}</p>
                                    <p className="card-text">Status: {character.status}</p>
                                    <div className="mt-1">
                                        <span className="card-text">Phrases:</span>
                                        {character.phrases && character.phrases.length > 0 ? (
                                            <ul className="list-group list-group-flush">
                                                {character.phrases.slice(0,4).map((phrase, index) => (
                                                    <li key={index} className="list-group-item bg-transparent border-0 ps-0">
                                                        <span className="fst-italic text-secondary">"{phrase}"</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-muted small">Este personaje no tiene frases registradas.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="container col-md-4 p-3 text-center">
                                <button type="button" className="btn btn-warning w-50" onClick={addFav}><i className="fa-solid fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
