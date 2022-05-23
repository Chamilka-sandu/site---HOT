import "./handloom.css";
import { Link } from "react-router-dom";

const HandloomTile = ({ handloom }) => {
  return (
    <>
      <div class="col-lg-4 mb-3">
        <div class="card">
          <img src={handloom.image} alt="" class="card-img-top"  width="300" height="200"/>
          <div class="card-body">

            <h5 class="card-title">{handloom.enterpriseName}</h5>
            <p class="card-text">{handloom.introduction}</p>

            <Link
              to={`/drumsDetails/${handloom.docId}`}
              class="btn btn-outline-success btn-lg me-2"
            >
              Read More
            </Link>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default HandloomTile;
