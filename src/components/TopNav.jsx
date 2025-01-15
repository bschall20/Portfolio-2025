// import React, { useState } from "react";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";





function TopNav() {
  // const [active, setActive] = useState('/');
  // const setActiveNav = () => {
  //     setActive((eventkey) => {
  //         return !eventkey;
  //     });
  // };
  const [menuIcon, setMenuIcon] = useState(true)
  const expandMenu = () => {
    setMenuIcon(!menuIcon)
    console.log(menuIcon)
  }

  return (
    <nav id="navBar">
      <div className="navBarTop">
        <div className="navTitle">
          <a href="/">Brennan Schall</a>
        </div>
        <div className="navLinks">
          <a href="/" eventkey="/">Home</a>
          <a href="/about" eventkey="about">About</a>
          <a href="/resume" eventkey="resume">Resume</a>
        </div>
        <div className="smallNavLinks">
        {menuIcon === true ? < RxHamburgerMenu className="navMenuIcon" onClick={expandMenu} /> : 
       <IoMdClose className="navMenuIcon" onClick={expandMenu}/>}
        </div>
      </div>
      {menuIcon === false ? <div className="navBarBottom">
        <div className="navBarBottomLink">
          <a href="/" eventkey="/">Home</a>
        </div>
        <div className="navBarBottomLink">
        <a href="/about" eventkey="about">About</a>
        </div>
        <div className="navBarBottomLink">
        <a href="/resume" eventkey="resume">Resume</a>
        </div>
          {/* <a href="/" eventkey="/">Home</a>
          <a href="/about" eventkey="about">About</a>
          <a href="/resume" eventkey="resume">Resume</a> */}
      </div> : null}
    </nav>

  );
}

export default TopNav;
