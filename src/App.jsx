import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import { useState, useRef, useEffect } from "react";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import EnterpriseProfile from "./components/Enterprises"

import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import Team from "./components/Team";

import Home from "./components/home";
import ImageUpload from "./components/ImageUpload";

import Cane from "./components/enterprise/cane/cane";
import Bathik from "./components/enterprise/bathik/bathik";
import Drums from "./components/enterprise/drums/drums";
import Brass from "./components/enterprise/brass/brass";
import Carving from "./components/enterprise/carving/carving";
import Coir from "./components/enterprise/coir/coir";
import Handloom from "./components/enterprise/handloom/handloom";
// import Laksha from "./components/enterprise/laksha/laksha";
import Masks from "./components/enterprise/masks/masks";
import Pottery from "./components/enterprise/pottery/pottery";
import Beeralu from "./components/enterprise/beeralu/beeralu";

import CaneDetails from "./components/enterprise/cane/caneDetails";
import BathikDetails from "./components/enterprise/bathik/bathikDetails";
import DrumsDetails from "./components/enterprise/drums/drumsDetails";
import BrassDetails from "./components/enterprise/brass/brassDetails";
import CarvingDetails from "./components/enterprise/carving/carvingDetails";
import HandloomDetails from "./components/enterprise/handloom/handloomDetails";
// import LakshaDetails from "./components/enterprise/laksha/lakshaDetails";
import MasksDetails from "./components/enterprise/masks/masksDetails";
import PotteryDetails from "./components/enterprise/pottery/potteryDetails";
import BeeraluDetails from "./components/enterprise/beeralu/beeraluDetails";
import CoirDetails from "./components/enterprise/coir/coirDetails";

import AdHome from "./components/admin/Home";
import AUser from "./components/admin/NewUser";
import WidgetLg from "./components/admin/WidgetLg";
import WidgetSm from "./components/admin/WidgetSm";
import DonationReport from "./components/admin/feedback";
import ANewUser from "./components/admin/login";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div>
      <Router>
        <UserAuthContextProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/upload" element={<ImageUpload />} />

            <Route exact path="/cane" element={<Cane />} />
            <Route exact path="/bathik" element={<Bathik />} />
            <Route exact path="/drums" element={<Drums />} />
            <Route exact path="/brass" element={<Brass />} />
            <Route exact path="/carving" element={<Carving />} />
           <Route exact path="/handloom" element={<Handloom />} />
            <Route exact path="/pottery" element={<Pottery />} />
            <Route exact path="/beeralu" element={<Beeralu />} />
            <Route exact path="/masks" element={<Masks />} />
            <Route exact path="/coir" element={<Coir />} />
             {/* <Route exact path="/laksha" element={<Laksha />} />
             */}



            <Route exact path="/team" element={<Team />} />
            <Route exact path="/profiles" element={<EnterpriseProfile />} />

            <Route
              exact
              path="/caneDetails/:docId"
              element={<CaneDetails />}
            />

            <Route
              exact
              path="/bathikDetails/:docId"
              element={<BathikDetails />}
            />

            <Route
              exact
              path="/drumsDetails/:docId"
              element={<DrumsDetails />}
            />

<Route
              exact
              path="/masksDetails/:docId"
              element={<MasksDetails />}
            />

            <Route
              exact
              path="/brassDetails/:docId"
              element={<BrassDetails />}
            />

          <Route
              exact
              path="/carvingDetails/:docId"
              element={<CarvingDetails />}
            />

          <Route
              exact
              path="/handloomDetails/:docId"
              element={<HandloomDetails />}
            /> 
            
            <Route
              exact
              path="/potteryDetails/:docId"
              element={<PotteryDetails />}
            />
<Route
              exact
              path="/beeraluDetails/:docId"
              element={<BeeraluDetails />}
            />
            
<Route
              exact
              path="/coirDetails/:docId"
              element={<CoirDetails />}
            /> 
 {/*
<Route
              exact
              path="/lakshaDetails/:docId"
              element={<LakshaDetails />}
            />


*/}




            <Route exact path="/alogin" element={<ANewUser />} />
            <Route
              exact
              path="/adhome"
              element={
                // <AdminProtectedRoute>
                <AdHome />
                // </AdminProtectedRoute>
              }
            />
            <Route
              exact
              path="/adduser"
              element={
                // <AdminProtectedRoute>
                <AUser />
                // </AdminProtectedRoute>
              }
            />
            <Route
              exact
              path="/feedbacks"
              element={
                // <AdminProtectedRoute>
                <WidgetLg />
                // </AdminProtectedRoute>
              }
            />
            <Route
              exact
              path="/users"
              element={
                // <AdminProtectedRoute>
                <WidgetSm />
                // </AdminProtectedRoute>
              }
            />

            <Route
              exact
              path="/users"
              element={
                // <AdminProtectedRoute>
                <DonationReport />
                // </AdminProtectedRoute>
              }
            />
          </Routes>
         
        </UserAuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
