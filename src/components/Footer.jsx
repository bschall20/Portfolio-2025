import React from 'react';
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";




function Footer() {
    return (
        <div id="footer">
            {/* <div>
                <a href="https://www.github.com/bschall20" target="_blank" rel="noreferrer"><FaGithub className="footerSocial"/></a>
                <a href="https://www.linkedin.com/in/brennan-schall-36bb14139" target="_blank" rel="noreferrer"><FaLinkedinIn className="footerSocial"/></a>
                <a href="https://www.instagram.com/b_schall19" target="_blank" rel="noreferrer"><FaInstagram className="footerSocial"/></a>
            </div> */}
            <p className="copyrightFooter">Made by <a href="/" className="footerLink">Brennan Schall</a> © {new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer;