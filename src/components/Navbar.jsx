import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();

	return (
		<nav className="navbar bg-dark bg-opacity-25">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites	
						</a>
						<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                           {store.favorite.length > 0 ? (
                                store.favorite.map((fav) => (
                                    <li key={fav.id} className="d-flex justify-content-between align-items-center dropdown-item">
                                        <Link to={`/character/${fav.id}`} className="text-decoration-none text-dark flex-grow-1">
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




// export const Navbar = () => {
//     const { store, dispatch } = useGlobalReducer(); // 2. Accedemos al estado global

//     return (
//         <nav className="navbar bg-dark bg-opacity-25 p-3">
//             <div className="container">
//                 <Link to="/">
//                     <span className="navbar-brand mb-0 h1">Simpsons API</span>
//                 </Link>
//                 <div className="ml-auto">
//                     {/* 3. Estructura Dropdown de Bootstrap */}
//                     <div className="dropdown">
//                         <button 
//                             className="btn btn-primary dropdown-toggle" 
//                             type="button" 
//                             id="dropdownMenuButton" 
//                             data-bs-toggle="dropdown" 
//                             aria-expanded="false"
//                         >
//                             Favorites 
//                             <span className="badge bg-secondary ms-2">{store.favorite.length}</span>
//                         </button>
                        
//                         <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
//                             {store.favorite.length > 0 ? (
//                                 store.favorite.map((fav) => (
//                                     <li key={fav.id} className="d-flex justify-content-between align-items-center dropdown-item">
//                                         <Link to={`/character/${fav.id}`} className="text-decoration-none text-dark flex-grow-1">
//                                             {fav.name}
//                                         </Link>
//                                         <i 
//                                             className="fa-solid fa-trash text-danger ms-2"
//                                             style={{ cursor: "pointer" }}
//                                             onClick={() => dispatch({ type: 'delete_fav', payload: fav.id })}
//                                         ></i>
//                                     </li>
//                                 ))
//                             ) : (
//                                 <li className="dropdown-item text-center text-muted">Empty</li>
//                             )}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };