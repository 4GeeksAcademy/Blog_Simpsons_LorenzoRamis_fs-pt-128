export const LocationrCard = ({ location }) => {

  return (
    <>
      <div className="d-flex">
        <div className="card" style={{width: "18rem"}}>
          <img
            src={`https://cdn.thesimpsonsapi.com/500/location/${location.id}.webp`}
            className="card-img-top"
            alt={location.name}
          />
          <div className="card-body">
            <h5 className="card-title">Name: {location.name}</h5>
            <p className="card-text">Town: {location.town}</p>
            <p className="card-text">Use: {location.use}</p> 
          </div>
        </div>
      </div>
    </>
  );
};