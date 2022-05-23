import React, { useEffect, useState } from "react";
import { Navigation } from "../../navigation";
import { db } from "../../../database/firebase-config";
import { collection, where, query, onSnapshot } from "@firebase/firestore";
import "./laksha.css";
import bathikImg from "../../../data/img/HDrum.jpg";
import LakshaTile from "./lakshaTile";


function Laksha({ children }) {
  const [lakshaList, setLakshaList] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "Enterprises"),
      where("type", "==", "laksha")
    );

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        const lakshaData = doc.data();
        lakshaData.docId = doc.id;
        setLakshaList((arr) => [...arr, lakshaData]);
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
              {lakshaList &&
                lakshaList.map((laksha, index) => {
                  return <LakshaTile key={index} laksha={laksha} />;
                })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Laksha;
