import React, { useEffect, useState } from "react";
import { Navigation } from "../../navigation";
import { db } from "../../../database/firebase-config";
import { collection, where, query, onSnapshot } from "@firebase/firestore";
import "./carving.css";
import bathikImg from "../../../data/img/b1.jpg";
import CarvingTile from "./carvingTile";


function Carving({ children }) {
  const [carvingList, setCarvingList] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "Enterprises"),
      where("type", "==", "carving")
    );

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        const carvingData = doc.data();
        carvingData.docId = doc.id;
        setCarvingList((arr) => [...arr, carvingData]);
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
          <h1 class="display-3">CARVINGS </h1>
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
              {carvingList &&
                carvingList.map((carving, index) => {
                  return <CarvingTile key={index} carving={carving} />;
                })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Carving;
