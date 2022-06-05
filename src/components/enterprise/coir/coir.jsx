import React, { useEffect, useState } from "react";
import { Navigation } from "../../navigation";
import { db } from "../../../database/firebase-config";
import { collection, where, query, onSnapshot } from "@firebase/firestore";
import "./coir.css";
import bathikImg from "../../../data/img/b1.jpg";
import CoirTile from "./coirTile";


function Coir({ children }) {
  const [coirList, setCoirList] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "Enterprises"),
      where("type", "==", "coir")
    );

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        const coirData = doc.data();
        coirData.docId = doc.id;
        setCoirList((arr) => [...arr, coirData]);
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
      <p
        style={{
          fontSize: "50px",
          fontWeight: "800",
          textAlign: "center",
          
        }}
      >
        WE ARE COMING SOON !
      </p>
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
          <h1 class="display-3">COIR </h1>
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
              {coirList &&
                coirList.map((coir, index) => {
                  return <CoirTile key={index} coir={coir} />;
                })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Coir;
