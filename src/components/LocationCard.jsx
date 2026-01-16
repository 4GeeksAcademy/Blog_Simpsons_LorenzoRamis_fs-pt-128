export const LocationCard = ({ location }) => {

  return (
    <>
      <div className="d-flex">
        <div className="card" style={{ width: "18rem", background: "" }}>
          <img
            src={`https://cdn.thesimpsonsapi.com/1280/location/${location.id}.webp`}
            className="card-img-top"
            alt={location.name}
          />
          <div className="card-body">
            <h5 className="card-title">Name: {location.name}</h5>
            <p className="card-text">Town: {location.town}</p>
            <p className="card-text">Use: {location.use}</p>
            <div className="d-flex justify-content-between m-2 ">
              <button type="button" className="col-4 btn btn-warning mb-0">Details</button>
              <button type="button" className="col-4 btn btn-warning mb-0" id="btn-heart"><i className="fa-solid fa-heart"></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};