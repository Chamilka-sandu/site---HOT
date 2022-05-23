import React, { useEffect, useState } from "react";
import { Navigation } from "../../navigation";
import { db } from "./../../../database/firebase-config";
import { collection, where, query, onSnapshot } from "@firebase/firestore";
import "./cane.css";
import bathikImg from "../../../data/img/Hcane.jpg";
import CaneTile from "./caneTile";

// import { Description } from "../../Description";

function Cane({ children }) {
  const [caneList, setCaneList] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "Enterprises"),
      where("type", "==", "cane")
    );

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        const caneData = doc.data();
        caneData.docId = doc.id;
        setCaneList((arr) => [...arr, caneData]);
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
          <h1 class="display-3">CANE </h1>
          <p class="lead">Marvel in the wonders of eclectic designs and patterns.</p>
        </section>
      </div>

      <div class="row">
        <section id="gallery">
          <div class="container">
            <div class="row">
              {caneList &&
                caneList.map((cane, index) => {
                  return <CaneTile key={index} bathik={cane} />;
                })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Cane;
