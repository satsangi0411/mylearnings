import React from 'react'
import { AiFillGithub } from "react-icons/ai";
const Navbar = (props) => {
  return (
    <nav
    className='navbar bg-warning'
                                >
<AiFillGithub/> {props.title}            

    </nav>
  )                     
}

export default Navbar
