import "./beeralu.css";
import { Link } from "react-router-dom";

const BeeraluTile = ({ beeralu }) => {
  return (
    <>
      <div class="col-lg-4 mb-3">
        <div class="card">
          <img src={beeralu.image} alt="" class="card-img-top"  width="300" height="200"/>
          <div class="card-body">

            <h5 class="card-title">{beeralu.enterpriseName}</h5>
            <p class="card-text">{beeralu.introduction}</p>


            <Link
              to={`/beeraluDetails/${beeralu.docId}`}
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

export default BeeraluTile;
