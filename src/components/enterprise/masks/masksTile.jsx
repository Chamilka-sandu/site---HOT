import "./masks.css";
import { Link } from "react-router-dom";

const MasksTile = ({ masks }) => {
  return (
    <>
      <div class="col-lg-4 mb-3">
        <div class="card">
          <img src={masks.image} alt="" class="card-img-top"  width="300" height="200"/>
          <div class="card-body">

            <h5 class="card-title">{masks.enterpriseName}</h5>
            <p class="card-text">{masks.introduction}</p>


            <Link
              to={`/masksDetails/${masks.docId}`}
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

export default MasksTile;
