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

    const fav_char = () => {
        dispatch({ type: 'fav_char', payload: character })
    }

    return (
        <>
            <div className="container mt-4">
                <div className="card mb-3">
                    <div className="d-flex justify-content-between p-2">
                        <Link className="" to={`/`}>
                            <button type="button" className="w-100 btn btn-warning " ><i className="fa-solid fa-arrow-left"></i> Back</button>
                        </Link>
                        <button type="button" className="col-md-2 btn btn-warning" onClick={fav_char}><i className="fa-solid fa-heart"></i></button>
                    </div>
                    <div className="d-flex justify-content-center align-middle">
                        <img src={`https://cdn.thesimpsonsapi.com/1280/character/${character.id}.webp`} className="" style={{ width: "300px" }} alt="..." />
                    </div>
                    <h4 className="card-title text-center">{character.name}</h4>
                    <table class="table text-center">
                        <thead>
                            <tr>
                                <th scope="col-md-1">Age</th>
                                <th scope="col-md-2">Birthdate</th>
                                <th scope="col-md-2">Gender</th>
                                <th scope="col-md-3">Phrases</th>
                                <th scope="col-md-2">Occupation</th>
                                <th scope="col-md-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{character.age}</td>
                                <td>{character.birthdate}</td>
                                <td>{character.gender}</td>
                                <td>{character.phrases && character.phrases.length > 0 ? (
                                    <ul className="list-group list-group-flush">
                                        {character.phrases.slice(0, 4).map((phrase, index) => (
                                            <li key={index} className="list-group-item bg-transparent border-0 ps-0">
                                                <span className="fst-italic text-secondary">"{phrase}"</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-muted small">Este personaje no tiene frases registradas.</p>
                                )}</td>
                                <td>{character.occupation}</td>
                                <td>{character.status}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
