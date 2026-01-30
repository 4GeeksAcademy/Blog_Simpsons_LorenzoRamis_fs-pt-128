import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useEffect, useState } from "react"
import { getLocation } from "../service/APIServices"
import { Link } from "react-router-dom";

export const LocationDetails = () => {

    const { id } = useParams()

    const [location, setLocation] = useState()

    const { store, dispatch } = useGlobalReducer()

    const getLocationData = async () => {
        const locationData = await getLocation(id)
        setLocation(locationData)
    }

    const addFav = () => {
    dispatch({ type: 'fav_loc', payload: location })
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
                <div className="card mb-3">
                    <div className="d-flex justify-content-between p-2">
                        <Link className="" to={`/`}>
                            <button type="button" className="w-100 btn btn-warning " ><i className="fa-solid fa-arrow-left"></i> Back</button>
                        </Link>
                        <button type="button" className="col-md-2 btn btn-warning" onClick={addFav}><i className="fa-solid fa-heart"></i></button>
                    </div>
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