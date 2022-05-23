import "./pottery.css";
import { Link } from "react-router-dom";

const PotteryTile = ({ pottery }) => {
  return (
    <>
      <div class="col-lg-4 mb-3">
        <div class="card">
          <img src={pottery.image} alt="" class="card-img-top"  width="300" height="200"/>
          <div class="card-body">

            <h5 class="card-title">{pottery.enterpriseName}</h5>
            <p class="card-text">{pottery.introduction}</p>


            <Link
              to={`/potteryDetails/${pottery.docId}`}
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

export default PotteryTile;
