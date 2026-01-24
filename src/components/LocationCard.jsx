export const LocationCard = ({ location }) => {

  return (
    <>
      <div className="container mt-5">
        <div className="card h-100" style={{ width: "18rem" }}>
          <img
            src={`https://cdn.thesimpsonsapi.com/500/location/${location.id}.webp`}
            className="card-img-top"
            alt={location.name}
            style={{height: "12rem", objectFit: "cover"}}
          />
          <div className="card-body align-content-around ">
            <h5 className="card-title text-uppercase">{location.name}</h5>
            <p className="card-text">Town: {location.town}</p>
            <p className="card-text">Use: {location.use}</p>
          </div>
          <div className="d-flex justify-content-between mt-auto p-3 ">
            <button type="button" className="col-4 btn " style={{ backgroundColor: "#ffbf00" }}>Details</button>
            <button type="button" className="col-4 btn btn-warning" id="btn-heart"><i className="fa-solid fa-heart"></i></button>
          </div>
        </div>
      </div>

    </>
  );
};