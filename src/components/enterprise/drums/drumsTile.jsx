import "./drums.css";
import { Link } from "react-router-dom";

const DrumsTile = ({ drums }) => {
  return (
    <>
      <div class="col-lg-4 mb-3">
        <div class="card">
          <img src={drums.image} alt="" class="card-img-top"  width="300" height="200"/>
          <div class="card-body">

            <h5 class="card-title">{drums.enterpriseName}</h5>
            <p class="card-text">{drums.introduction}</p>


            <Link
              to={`/bathikDetails/${drums.docId}`}
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

export default DrumsTile;
