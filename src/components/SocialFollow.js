import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    //faFacebook,
    faTwitter,
    faInstagram,
    faYoutube,
    faBehance,
} from "@fortawesome/free-brands-svg-icons";
import "./SocialFollow.css";

export default function SocialFollow() {
    return (
        <div className="social-container">
            <a 
                href="https://www.linkedin.com/in/cheahannah/"
                className="linkedin social"
                target="_blank" rel="noreferrer"
            >
                <FontAwesomeIcon icon ={faLinkedin} size="x" />
            </a>
            <a 
                href="https://github.com/cheahannah/"
                className="github social"
                target="_blank" rel="noreferrer"
            >
                <FontAwesomeIcon icon ={faGithub} size="x" />
            </a>
            <a 
                href="https://twitter.com/xirimpi"
                className="twitter social"
                target="_blank" rel="noreferrer"
            >
                <FontAwesomeIcon icon ={faTwitter} size="x" />
            </a>
            {/* <a 
                href="https://www.facebook.com/profile.php?id=100007118534719"
                className="facebook social"
                target="_blank" rel="noreferrer"
            >
                <FontAwesomeIcon icon ={faFacebook} size="x" />
            </a> */}
            <a 
                href="https://www.instagram.com/xirimpi/"
                className="instagram social"
                target="_blank" rel="noreferrer"
            >
                <FontAwesomeIcon icon={faInstagram} size="x" />
            </a>
            <a 
                href="https://www.youtube.com/channel/UCNnSxa0u39kUHOBAl_F8Gjg"
                className="youtube social"
                target="_blank" rel="noreferrer"
            >
                <FontAwesomeIcon icon={faYoutube} size="x" />
            </a>
            <a 
                href="https://www.behance.net/xirimpi"
                className="behance social"
                target="_blank" rel="noreferrer"
            >
                <FontAwesomeIcon icon={faBehance} size="x" />
            </a>
        </div>
    );
}