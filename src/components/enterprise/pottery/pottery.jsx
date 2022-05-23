import React, { useEffect, useState } from "react";
import { Navigation } from "../../navigation";
import { db } from "../../../database/firebase-config";
import { collection, where, query, onSnapshot } from "@firebase/firestore";
import "./pottery.css";
import bathikImg from "../../../data/img/b1.jpg";
import PotteryTile from "./potteryTile";


function Pottery({ children }) {
  const [potteryList, setPotteryList] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "Enterprises"),
      where("type", "==", "pottery")
    );

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        const potteryData = doc.data();
        potteryData.docId = doc.id;
        setPotteryList((arr) => [...arr, potteryData]);
      });
    });
  }, []);

  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div>
      <div>
        <Navigation />
      </div>

      <div class="row">
        <section
          style={{
            backgroundImage: `url(${bathikImg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
          id="header "
          class="jumbotron text-center"
        >
          <h1 class="display-3">POTTERY </h1>
          <p class="lead">Marvel in the wonders of eclectic designs and patterns.</p>
        </section>
      </div>

      {/* <div class="row">
        <Description />
      </div> */}

      <div class="row">
        <section id="gallery">
          <div class="container">
            <div class="row">
              {potteryList &&
                potteryList.map((pottery, index) => {
                  return <PotteryTile key={index} pottery={pottery} />;
                })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Pottery;
