import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faFacebook,
    faInstagram,
    faBehance,
} from "@fortawesome/free-brands-svg-icons";
import "./SocialFollow.css";

export default function SocialFollow() {
    return (
        <div className="social-container">
            <a 
                href="https://www.linkedin.com/in/hannahchea/"
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
                href="https://www.facebook.com/profile.php?id=100007118534719"
                className="facebook social"
                target="_blank" rel="noreferrer"
            >
                <FontAwesomeIcon icon ={faFacebook} size="x" />
            </a>
            <a 
                href="https://www.instagram.com/thecheapet/"
                className="instagram social"
                target="_blank" rel="noreferrer"
            >
                <FontAwesomeIcon icon={faInstagram} size="x" />
            </a>
            <a 
                href="https://www.behance.net/hannahchea"
                className="behance social"
                target="_blank" rel="noreferrer"
            >
                <FontAwesomeIcon icon={faBehance} size="x" />
            </a>
        </div>
    );
}