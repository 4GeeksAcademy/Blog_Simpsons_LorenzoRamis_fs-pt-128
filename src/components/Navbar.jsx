import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();

	return (
		<nav className="navbar bg-dark bg-opacity-25">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 chewy-regular">Simpsons Characters</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites <span className="badge bg-danger">{store.favorite.length}</span>	
						</a>
						<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                           {store.favorite.length > 0 ? (
                                store.favorite.map((fav) => (
                                    <li key={fav.id} className="d-flex justify-content-between align-items-center dropdown-item">
                                        <Link to={`/character/${fav.id}`} className="text-decoration-none text-dark">
                                            {fav.name}
                                        </Link>
                                        <i 
                                            className="fa-solid fa-trash text-danger ms-2"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => dispatch({ type: 'delete_fav', payload: fav.id })}
                                        ></i>
                                    </li>
                                ))
                            ) : (
                                <li className="dropdown-item text-center text-muted">Empty</li>
                            )}
                        </ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
