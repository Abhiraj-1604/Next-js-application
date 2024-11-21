import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: "https://github.com/Abhiraj-1604"},
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/abhiraj-rode-36232522a/"},
    {icon: <FaYoutube />, path: ""},
    {icon: <FaTwitter />, path: "https://x.com/Abhiraj_1604?t=silXSioNmHLlCzskV2HzWQ&s=09"},
]
const Social = ({containerStyles, iconStyles}) => {
    return <div className={containerStyles}>
        {socials.map((item, index)=>{
            return (
              <Link key={index} href={item.path} className={iconStyles}>
                 {item.icon}
              </Link>
            );
        })}
    </div>;
};

export default Social;