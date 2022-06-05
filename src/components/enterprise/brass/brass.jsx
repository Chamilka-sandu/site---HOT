import React, { useEffect, useState } from "react";
import { Navigation } from "../../navigation";
import { db } from "../../../database/firebase-config";
import { collection, where, query, onSnapshot } from "@firebase/firestore";
import "./brass.css";
import bathikImg from "../../../data/img/b1.jpg";
import BrassTile from "./brassTile";


function Brass({ children }) {
  const [brassList, setBrassList] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "Enterprises"),
      where("type", "==", "brass")
    );

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        const brassData = doc.data();
        brassData.docId = doc.id;
        setBrassList((arr) => [...arr, brassData]);
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
          <h1 class="display-3">BRASS </h1>
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
              {brassList &&
                brassList.map((brass, index) => {
                  return <BrassTile key={index} brass={brass} />;
                })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Brass;
