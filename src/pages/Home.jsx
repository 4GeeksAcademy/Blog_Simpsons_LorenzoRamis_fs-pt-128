import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getCharacter } from "../service/APIServices.js";
import { CharacterCard } from "../components/CharacterCard.jsx";
import {LocationrCard} from "../components/LocationCard.jsx";
import { getLocation } from "../service/APIServices.js";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		getCharacter(dispatch);
		getLocation(dispatch);
	}, [])
	return (
		<>
			<h1 className="text-center mt-5">Simpsons Characters</h1>
			<div className="container">
				<div className="d-flex flex-nowrap overflow-auto pb-4" style={{ gap: "3rem" }}>
					{store.characters && store.characters.map((character) => {
						return (
							<CharacterCard character={character} key={character.id} />
						)
					})}
				</div>
				<div className="d-flex flex-nowrap overflow-auto pb-4 mt-5" style={{ gap: "3rem" }}>
					{store.locations && store.locations.map((location) => {
						return (
						
							<LocationrCard location={location} key={location.id} />
						)
					})}
				</div>
			</div>
		</>
	);
}; 