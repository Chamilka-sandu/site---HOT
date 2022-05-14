import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import { useState, useRef, useEffect } from "react";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { ContactUs } from "./components/mailer";
import EnterpriseProfile from "./components/Enterprises"

import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import Team from "./components/Team";

import PayPal from "./components/PayPal";
import Donation from "./components/donations";
import Home from "./components/home";
import ImageUpload from "./components/ImageUpload";

import Cane from "./components/enterprise/cane/cane";
import Bathik from "./components/enterprise/bathik/bathik";

import AdHome from "./components/admin/Home";
import AUser from "./components/admin/NewUser";
import WidgetLg from "./components/admin/WidgetLg";
import WidgetSm from "./components/admin/WidgetSm";
import DonationReport from "./components/admin/feedback";
import ANewUser from "./components/admin/login";
import BathikDetails from "./components/enterprise/bathik/bathikDetails";

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
            {/* <Route exact path="/paypal" element={<PayPal />} /> */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/upload" element={<ImageUpload />} />

            <Route exact path="/cane" element={<Cane />} />
            <Route exact path="/bathik" element={<Bathik />} />
            <Route exact path="/team" element={<Team />} />
            <Route exact path="/profiles" element={<EnterpriseProfile />} />

            <Route
              exact
              path="/bathikDetails/:docId"
              element={<BathikDetails />}
            />

            {/* <Route
              exact
              path="/donation"
              element={
                <ProtectedRoute>
                  <Donation />
                </ProtectedRoute>
              }
            /> */}

            {/* ADMIN */}

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
