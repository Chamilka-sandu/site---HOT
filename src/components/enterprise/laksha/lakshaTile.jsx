import "./laksha.css";
import { Link } from "react-router-dom";

const LakshaTile = ({ laksha }) => {
  return (
    <>
      <div class="col-lg-4 mb-3">
        <div class="card">
          <img src={laksha.image} alt="" class="card-img-top"  width="300" height="200"/>
          <div class="card-body">

            <h5 class="card-title">{laksha.enterpriseName}</h5>
            <p class="card-text">{laksha.introduction}</p>

            <Link
              to={`/lakshaDetails/${laksha.docId}`}
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

export default LakshaTile;
