import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/logo-designcode.svg';
import './header.css';

const Header = ({ siteTitle }) => (
 <div className="header">
   <div className="headerGroup">
     <Link to="/"><img src={logo} width="30"/></Link>
     <Link to="/courses">Courses</Link>
     <Link to="/downloads">Downloads</Link>
     <Link to="/workshops">Workshops</Link>
     <button><Link to="/buy">Buy</Link></button>
    
   </div>
 </div>
)

export default Header
