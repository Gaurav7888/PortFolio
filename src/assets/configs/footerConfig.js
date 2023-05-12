import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import {BsMedium} from "react-icons/bs";
import React from "react";

const footerConfig = {
    icons: [
        {
            id: "footer-0",
            url: "https://github.com/Gaurav7888",
            className: "social-icon",
            target: "_blank",
            icon: <AiFillGithub size={50}/>
        },
        {
            id: "footer-1",
            url: "https://www.linkedin.com/in/gauravsarkar7888/",
            className: "social-icon",
            target: "_blank",
            icon: <FaLinkedinIn size={50}/>
        },
        {
            id: "footer-2",
            url: "https://medium.com/@gosshhh9",
            className: "social-icon",
            target: "_blank",
            icon: <BsMedium size={50}/>
        },
        {
            id: "footer-3",
            url: "https://twitter.com/GauravSarkar99",
            className: "social-icon",
            target: "_blank",
            icon: <BsMedium size={50}/>
        },
        {
            id: "footer-4",
            url: "https://www.instagram.com/sarkaristic9/",
            className: "social-icon",
            target: "_blank",
            icon: <BsMedium size={50}/>
        }
    ]
}

export default footerConfig
