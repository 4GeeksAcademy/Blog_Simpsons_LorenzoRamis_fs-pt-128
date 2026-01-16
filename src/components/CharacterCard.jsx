export const CharacterCard = ({ character }) => {

  return (
    <>
      <div className="container mt-5">
        <div className="card h-100" style={{ width: "18rem"}}>
          <img
            src={`https://cdn.thesimpsonsapi.com/500/character/${character.id}.webp`}
            className="card-img-top"
            alt={character.name}
          />
          <div className="card-body">
            <h5 className="card-title text-uppercase">{character.name}</h5>
            <p className="card-text">Age: {character.age}</p>
            <p className="card-text">Gender: {character.gender}</p>
          </div>
            <div className="d-flex justify-content-between mt-auto p-3 ">
              <button type="button" className="col-4 btn btn-warning">Details</button>
              <button type="button" className="col-4 btn btn-warning" id="btn-heart"><i className="fa-solid fa-heart"></i></button>
            </div>
        </div>
      </div>
    </>
  );
};