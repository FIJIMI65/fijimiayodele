import { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGithub, } from "react-icons/fa";

function Socials () {
	// scroll states
	const [showSocials, setShowSocials] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	// handles display and hiding of the social icons
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
		
			if (currentScrollY > lastScrollY) {
				setShowSocials(false); // hide when scrolling down
			} else {
				setShowSocials(true); // show when scrolling up
			}
		
			setLastScrollY(currentScrollY);
		};
	
		window.addEventListener('scroll', handleScroll);
	
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollY]);
	const socialIcons = [
		{icon: <FaFacebook color="#1877F2" />, link: 'https://facebook.com'},
		{icon: <FaTwitter color="#1DA1F2" />, link: 'https://twitter.com'},
		{icon: <FaInstagram color="#E4405F" />, link: 'https://instagram.com'},
		{icon: <FaLinkedin color="#0077B5" />, link: 'https://linkedin.com'},
		{icon: <FaYoutube color="#FF0000" />, link: 'https://youtube.com'},
		{icon: <FaGithub color="#eeeeee" />, link: 'https://github.com'},
	]
	return (
		<div className={`socials_container ${!showSocials ? 'hidden' : ''}`}>
			<div className="socials">
				{socialIcons.map((social, index) => (
					<a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="social">
						{social.icon}
					</a>
				))}
			</div>
		</div>
	)
}
export {Socials}
