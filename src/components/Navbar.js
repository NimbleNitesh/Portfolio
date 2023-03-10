import "./NavbarStyles.css";
import { Component } from "react";
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handClick=()=>setClick(!click);



	return (
		<div className="header">
			<Link to="/">
				<h1>HorridBear</h1>
			</Link>
			<ul className={click?"nav-menu active":"nav-menu"}>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/project">Project</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/contact">Contact</Link></li>
			</ul>
			<div className="hamburger" onClick={handClick} >
			{click?(<FaTimes size={25} style={{color: "#000000"}} /> ): (<FaBars size={25} style={{color: "#000000"}} />)}
			</div>
		</div>
	)
}

export default Navbar