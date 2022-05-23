import "./carving.css";
import { Link } from "react-router-dom";

const CarvingTile = ({ carving }) => {
  return (
    <>
      <div class="col-lg-4 mb-3">
        <div class="card">
          <img src={carving.image} alt="" class="card-img-top"  width="300" height="200"/>
          <div class="card-body">

            <h5 class="card-title">{carving.enterpriseName}</h5>
            <p class="card-text">{carving.introduction}</p>


            <Link
              to={`/carvingDetails/${carving.docId}`}
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

export default CarvingTile;
