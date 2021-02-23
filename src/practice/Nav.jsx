import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

const Nav = (props) => {
    const links = {
        color:'white',
        textDecoration:'none'
    }

    return(
        <nav>
             
            <Link style={links} to='/'>
            <CgSun className="logo" size={40} /> 
            </Link>
            <ul>
                <Link style={links} to="/books">
                <li>Normal</li>
                </Link>
                <Link style={links}  to="/about">
                <li>Firebase</li>
                </Link>
                <Link style={links} to="/first">
                <li>localStorage</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
