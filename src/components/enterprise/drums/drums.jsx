import React, { useEffect, useState } from "react";
import { Navigation_log } from "../../navigation_log";
import { db } from "../../../database/firebase-config";
import { collection, where, query, onSnapshot } from "@firebase/firestore";
import "./drums.css";
import bathikImg from "../../../data/img/b1.jpg";
import DrumsTile from "./drumsTile";


function Drums({ children }) {
  const [drumsList, setDrumsList] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "Enterprises"),
      where("type", "==", "drums")
    );

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        const drumsData = doc.data();
        drumsData.docId = doc.id;
        setDrumsList((arr) => [...arr, drumsData]);
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
        <Navigation_log />
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
          <h1 class="display-3">DRUMS </h1>
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
              {drumsList &&
                drumsList.map((drums, index) => {
                  return <DrumsTile key={index} drums={drums} />;
                })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Drums;
