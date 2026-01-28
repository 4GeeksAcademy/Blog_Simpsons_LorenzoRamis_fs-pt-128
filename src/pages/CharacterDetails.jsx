import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useEffect, useState } from "react"
import { getCharacter } from "../service/APIServices"
import { Link } from "react-router-dom";

export const CharacterDetails = () => {

    const { id } = useParams()

    const [character, setCharacter] = useState()

    const { store, dispach } = useGlobalReducer()

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

    const randomPhrase = character.phrases.length > 0 ? character.phrases[Math.floor(Math.random() * character.phrases.length)] : "No hay frases disponibles";

    return (
        <>
            {/* <div className="container mt-4">
                <div className="card mb-3">
                    <div className="container w-25">
                        <img src={`https://cdn.thesimpsonsapi.com/1280/character/${character.id}.webp`} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                        <p className="card-text">{character.age}</p>
                        <p className="card-text">{character.birthdate}</p>
                        <p className="card-text">{character.occupation}</p>
                        <p className="card-text">{randomPhrase}</p>
                        <p className="card-text">{character.status}</p>
                    </div>
                    <Link to="/">
                        <button className="btn btn-primary m-2">Back</button>
                    </Link>
                </div>
            </div> */}

            <div className="container mt-4">
                <Link to="/">
                    <button className="btn m-2"><i class="fa-solid fa-arrow-left"></i> Back</button>
                </Link>
                <div className="card mb-3" style={{ width: "540px;" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://cdn.thesimpsonsapi.com/1280/character/${character.id}.webp`} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                <p className="card-text">{character.age}</p>
                                <p className="card-text">{character.birthdate}</p>
                                <p className="card-text">{character.occupation}</p>
                                <p className="card-text">{randomPhrase}</p>
                                <p className="card-text">{character.status}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
