import React, { useEffect, useState } from "react";
import { Navigation } from "../../navigation";
import { db } from "../../../database/firebase-config";
import { collection, where, query, onSnapshot } from "@firebase/firestore";
import "./masks.css";
import bathikImg from "../../../data/img/b1.jpg";
import MasksTile from "./masksTile";


function Masks({ children }) {
  const [masksList, setMasksList] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "Enterprises"),
      where("type", "==", "masks")
    );

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        const masksData = doc.data();
        masksData.docId = doc.id;
        setMasksList((arr) => [...arr, masksData]);
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
          <h1 class="display-3">MASKS </h1>
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
              {masksList &&
                masksList.map((masks, index) => {
                  return <MasksTile key={index} masks={masks} />;
                })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Masks;
