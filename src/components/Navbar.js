import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		}
	};

	window.addEventListener("resize", showButton);

	return (
		<>
			<div className="navbar">
				<div className="navbar-container container">
					<a href="#" onClick={()=>window.scrollTo(0,0)} className="navbar-logo">
						<img src="./images/nakagawa.svg" alt="E-logo" className="navbar-icon" />
					</a>
				</div>
				<div className="menu-icon" onClick={handleClick}>
					{click ? <FaTimes /> : <FaBars />}
				</div>

				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<a href="#" onClick={()=>window.scrollTo(0,0)} className="nav-links">
							HOME
						</a>
					</li>

					<li className="nav-item">
						<a href="#about" className="nav-links">
							ABOUT
						</a>
					</li>

					<li className="nav-item">
						<a href="#skills" className="nav-links">
							SKILLS
						</a>
					</li>

					<li className="nav-item">
						<a href="#contact" className="nav-links">
							CONTACT
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}

export default Navbar;
