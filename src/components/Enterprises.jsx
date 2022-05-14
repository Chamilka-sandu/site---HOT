import React from "react";
import { link, useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Profile from "./profiles";
import {Navigation} from "./navigation";



export default function EnterpriseProfile() {

return (
    <>
    <div>
        <Navigation />
    </div> 
    <div className="ent">

    <Profile/>

    <div id="footer">
        <div className="container text-center">
          <p>
            &copy; A Project By The Rotaract Club Of Uva Wellassa University -
            Badulla
          </p>
        </div>
      </div></div>

    </>
);

}
