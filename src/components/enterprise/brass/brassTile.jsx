import "./brass.css";
import { Link } from "react-router-dom";

const BrassTile = ({ brass }) => {
  return (
    <>
      <div class="col-lg-4 mb-3">
        <div class="card">
          <img src={brass.image} alt="" class="card-img-top"  width="300" height="200"/>
          <div class="card-body">

            <h5 class="card-title">{brass.enterpriseName}</h5>
            <p class="card-text">{brass.introduction}</p>


            <Link
              to={`/brassDetails/${brass.docId}`}
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

export default BrassTile;
