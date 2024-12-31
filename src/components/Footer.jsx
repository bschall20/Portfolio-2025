import React from 'react';
import { FaGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";




function Footer() {
    return (
        <div id="footer">
            <div className="footerContent">
            <div className="footerBoxL">
                <p className="connectFooter pt-3">Connect With Me: 
                    <br className="footerBreak" />
                    <a href="https://www.github.com" target="_blank" rel="noreferrer"><FaGithub className="connectLogo ms-2 me-1 mb-1"/></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaSquareInstagram className="connectLogo mx-1 mb-1"/></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin className="connectLogo mx-1 mb-1"/></a>
                </p>
                <p className="copyrightFooter">Copyright © {new Date().getFullYear()}. Brennan Schall. <br/>All Rights Reserved.</p>
                <p className="footerBrand" ><a href="/">Brennan Schall</a></p>
            </div>


            <div className="footerBoxR">
                <p className="footerLinkHome"><a href="/">Home</a></p>
                <p><a href="/about">About</a></p>
                <p><a href="/resume">Resume</a></p>
            </div>
            </div>
        </div>
    )
}

export default Footer;