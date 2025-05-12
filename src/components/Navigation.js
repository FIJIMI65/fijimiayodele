import React, { useState } from "react";
import { FaHome, FaProjectDiagram, FaInfoCircle } from "react-icons/fa";

const menuSize = 30
function Navigation () {
	const [onHover, setOnHover] = useState(Array.from({length: 3}).fill(false));
	const [showNavMenu, setShowNavMenu] = useState(false);
	const [isMenuClicked, setIsMenuClicked] = useState(false);
	const navMenuHandler = () => setShowNavMenu(!showNavMenu);
	const toggleMenuClickHandler = () => {setIsMenuClicked(!isMenuClicked)};
	const hoverHandler = (index, value) => {
		setOnHover(prev => {
			// console.log('prev:', prev)
			const updated = [...prev];
			updated[index] = value;
			return updated;
		});
	};
	const navIcons = [
		{
			faIcon: <FaHome onMouseEnter={()=>hoverHandler(0, true)} onMouseLeave={()=>hoverHandler(0, false)} size={menuSize} color={onHover[0]?styles.menuHover.hoverColor:styles.menuHover.idleColor} />,
			link: '#1'
		},
		{
			faIcon: <FaProjectDiagram onMouseEnter={()=>hoverHandler(1, true)} onMouseLeave={()=>hoverHandler(1, false)} size={menuSize} color={onHover[1]?styles.menuHover.hoverColor:styles.menuHover.idleColor} />,
			link: '#3'
		},
		{
			faIcon: <FaInfoCircle onMouseEnter={()=>hoverHandler(2, true)} onMouseLeave={()=>hoverHandler(2, false)} size={menuSize} color={onHover[2]?styles.menuHover.hoverColor:styles.menuHover.idleColor} />,
			link: '#4'
		},
	]
	return (
		<nav className="nav">
			<div>
				<div
				onClick={() => {
					navMenuHandler();
					toggleMenuClickHandler();
				}}
				className="burger"
				style={{
					background: isMenuClicked ? 'transparent' : null,
				}}
				>
					<div className="burger__patty"></div>
				</div>

				{<ul className={`nav__list ${showNavMenu ? "nav__list--active" : ""}`}>
					{navIcons?.map((icon, index) => (
						<li key={index} className="nav__item">
							<a
							onClick={() => {
								navMenuHandler();
								toggleMenuClickHandler();
							}}
							href={icon.link} className="nav__link">
								{icon.faIcon}
							</a>
						</li>
					))}
				</ul>}
			</div>
		</nav>
	)
}

const styles = {
	menuHover: {
		hoverColor: "rgb(80, 132, 206)",
		idleColor: "#fff",
	},
}

export {Navigation}
