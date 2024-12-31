// import React, { useState } from "react";

import React from "react";
function TopNav() {
  // const [active, setActive] = useState('/');
  // const setActiveNav = () => {
  //     setActive((eventkey) => {
  //         return !eventkey;
  //     });
  // };

  return (
    <nav id="navBar">
      <div className="navTitle">
        <a href="/">Brennan Schall</a>
      </div>
      <div className="navLinks">
        <a href="/" eventkey="/">Home</a>
        <a href="/about" eventkey="about">About</a>
        <a href="/resume" eventkey="resume">Resume</a>
      </div>
    </nav>

  );
}

export default TopNav;
