import React from "react";

import Profile from "./profiles";
import About from "./about";
import Features from "./features";
import Contact from "./contact";
import { Header } from "./header";
import { Navigation } from "./navigation";
import HomeCarousel from "../HomeCarousel";
import ChatComponent from "./chatComponent";

function Home() {
  return (
    <div style={{position: 'relative'}}>
      <div style={{zIndex: 10000, position: 'fixed', width: '100%'}}>
        <Navigation />
      </div>
      <div>
        <HomeCarousel />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Features />
      </div>
      <div id="profiles">
        <Profile />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <ChatComponent />
      </div>
    </div>
  );
}

export default Home;
