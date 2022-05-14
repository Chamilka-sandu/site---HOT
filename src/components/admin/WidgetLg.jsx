// import { useState, useEffect } from "react";
// import {db} from '../../database/firebase-config';
// import {
//   collection,
//   getDocs,
// } from "firebase/firestore";

// function WidgetLg() {

//   const [users, setUsers] = useState([]);
//   const usersCollectionRef = collection(db, "payments");



//   useEffect(() => {
//     const getUsers = async () => {
//       const data = await getDocs(usersCollectionRef);
//       setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };

//     getUsers();
//   }, []);

//   return (
// <>

// </>
//   );
// }

// export default WidgetLg;





import { useState, useEffect } from "react";
import { db } from "../../database/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function WidgetSm() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "contacts");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="App">
      <Topbar />
      <div className="col-md-2">
        <Sidebar />
      </div>

     
          <div className="widgetSm">
            <div className="col-md-10">
              <span className="widgetSmTitle">User Feedbacks</span>

              <ul className="widgetSmList">
                <li className="widgetSmListItem">
                  <div className="widgetSmUser">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">User Name</th>
                          <th scope="col">Email Address</th>
                          <th scope="col">Message</th>
                        </tr>
                      </thead>
                      <tbody>
                      {users.map((user) => {
        return (
                        <tr>
                          <td>{user.enterpriseName}</td>
                          <td>{user.ownerName}</td>
                          <td>{user.type}</td>
                        </tr>
                                                 );
                                                })}
                      </tbody>
                    </table>
                  </div>
                </li>
              </ul>
            </div>
          </div>
 
    </div>
  );
}

export default WidgetSm;
