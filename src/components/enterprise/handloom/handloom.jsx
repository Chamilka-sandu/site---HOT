import React, { useEffect, useState } from "react";
import { Navigation } from "../../navigation";
import { db } from "../../../database/firebase-config";
import { collection, where, query, onSnapshot } from "@firebase/firestore";
import "./handloom.css";
import bathikImg from "../../../data/img/b1.jpg";
import HandloomTile from "./handloomTile";


function Handloom({ children }) {
  const [handloomList, setHandloomList] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "Enterprises"),
      where("type", "==", "handloom")
    );

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        const handloomData = doc.data();
        handloomData.docId = doc.id;
        setHandloomList((arr) => [...arr, handloomData]);
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
          <h1 class="display-3">HANDLOOM </h1>
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
              {handloomList &&
                handloomList.map((handloom, index) => {
                  return <HandloomTile key={index} handloom={handloom} />;
                })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Handloom;
