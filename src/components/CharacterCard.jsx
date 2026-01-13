export const CharacterCard = ({ character }) => {

  return (
    <>
      <div className="d-flex">
        <div className="card" style={{width: "18rem"}}>
          <img
            src={`https://cdn.thesimpsonsapi.com/500/character/${character.id}.webp`}
            className="card-img-top"
            alt={character.name}
          />
          <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text">Edad: {character.age}</p>
            <p className="card-text">Género: {character.gender}</p> 
          </div>
        </div>
      </div>
    </>
  );
};