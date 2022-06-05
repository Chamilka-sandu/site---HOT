import React from "react";
import Scroll from "react-scroll";
import { Navigation } from "./navigation";
import { Helmet } from "react-helmet";
import pawan from "../data/img/pawan.jpg";
import anuja from "../data/img/anuja.jpg";
import sachintha from "../data/img/sachintha.jpg";
import thash from "../data/img/thash.jpg";
import teamCaresoul from "./teamCaresoul";
import "./Team.css";

function Team() {
  return (
    <div>
      <div>
        <Navigation />
      </div>

      <p
        style={{
          fontSize: "30px",
          fontWeight: "800",
          textAlign: "center",
          color: "#013744",
        }}
      >
        OUR PROFESSIONALS
      </p>

      <br></br>
      <br></br>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="testimonial-slider" className="owl-carousel">
              <div className="testimonial">
                <div className="pic">
                  <img src={anuja} />
                </div>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Architecto commodi dolorum earum fugiat, fugit hic id, ipsum
                  laborum minus nostrum numquam perspiciatis saepe velit.
                </p>
                <div className="testimonial-profile">
                  <h3 className="title">Anuja</h3>
                  <span className="post"> | President (2021/2022)</span>
                </div>
              </div>

              <div className="testimonial">
                <div className="pic">
                  <img src={pawan} />
                </div>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Architecto commodi dolorum earum fugiat, fugit hic id, ipsum
                  laborum minus nostrum numquam perspiciatis saepe velit.
                </p>
                <div className="testimonial-profile">
                  <h3 className="title">Pawan</h3>
                  <span className="post"> | Vice President (2021/2022)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <div class="demo">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-md-12">
              <div id="testimonial3-slider" class="owl-carousel1">
                <div class="testimonial3">
                  <p class="description">
                    Hi,
                  I'm Sachintha Shehan project chairperson of Hands of Thambapanni.
                  

                  </p>
                  <h3 class="title">Sachintha</h3>
                  <span className="post">Project Chairperson</span>
                  <div class="pic">
                    <img src={sachintha} alt="anuja" />
                  </div>
                </div>
                <div class="testimonial3">
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                   
                  
                  </p>
                  <h3 class="title">Thashini</h3>
                  <span className="post">Project Chairperson</span>
                  <div class="pic">
                    <img src={thash} alt="Thash" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>

      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div id="testimonial2-slider" class="owl-carousel">
              <div class="testimonial">
                <div class="pic">
                  <img src={sachintha} />
                </div>
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Architecto commodi dolorum earum fugiat, fugit hic id, ipsum
                  laborum minus nostrum numquam perspiciatis saepe velit.
                </p>
                <div class="testimonial-profile">
                  <h3 class="title">Malsha-</h3>
                  <span class="post">Web Developer</span>
                </div>
              </div>

              <div class="testimonial">
                <div class="pic">
                  <img src={thash} />
                </div>
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Architecto commodi dolorum earum fugiat, fugit hic id, ipsum
                  laborum minus nostrum numquam perspiciatis saepe velit.
                </p>
                <div class="testimonial-profile">
                  <h3 class="title">Thrividya-</h3>
                  <span class="post">Web Designer</span>
                </div>
              </div>
              <div class="testimonial">
                <div class="pic">
                  <img src={thash} />
                </div>
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Architecto commodi dolorum earum fugiat, fugit hic id, ipsum
                  laborum minus nostrum numquam perspiciatis saepe velit.
                </p>
                <div class="testimonial-profile">
                  <h3 class="title">Saduni-</h3>
                  <span class="post">Web Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="footer" className="py-0 pt-3">
        <div className="container text-center">
          <p>
            &copy; A Project By The Rotaract Club Of Uva Wellassa University -
            Badulla
          </p>
        </div>
      </div>
    </div>
  );
}
export default Team;
