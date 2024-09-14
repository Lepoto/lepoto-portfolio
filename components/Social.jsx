import Link from 'next/link';
import React from 'react'
import {FaGithub, FaLinkedinIn} from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>,path: ""},
    {icon: <FaLinkedinIn/>,path: ""},
]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>{socials.map((twi, index) => {
        return (<Link key={index} href={twi.path} className={iconStyles}>{twi.icon}</Link>)
    })}</div>
  )
}

export default Social