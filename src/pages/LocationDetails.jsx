import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useEffect, useState } from "react"
import { getLocation } from "../service/APIServices"
import { Link } from "react-router-dom";

export const LocationDetails = () => {

    const { id } = useParams()

    const [location, setLocation] = useState()

    const { store, dispach } = useGlobalReducer()

    const getLocationData = async () => {
        const locationData = await getLocation(id)
        setLocation(locationData)
    }

    useEffect(() => {
        getLocationData()
    }, [])

    if (!location) {
        return <div className="container mt-5">Cargando datos...</div>;
    }

    return (
        <>
            <div className="container mt-4">
                <Link to="/">
                    <button className="btn m-2"><i class="fa-solid fa-arrow-left"></i> Back</button>
                </Link>
                <div className="card mb-3">
                    <img src={`https://cdn.thesimpsonsapi.com/1280/location/${location.id}.webp`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{location.name}</h5>
                        <p className="card-text">{location.town}</p>
                        <p className="card-text">{location.use}</p>
                    </div>
                </div>
            </div>
        </>
    )
}