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
	return (
		<div className={`socials_container ${!showSocials ? 'hidden' : ''}`}>
			<div className="socials">
				<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social">
					<FaFacebook color="#1877F2" />
				</a>
				<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social">
					<FaTwitter color="#1DA1F2" />
				</a>
				<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social">
					<FaInstagram color="#E4405F" />
				</a>
				<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social">
					<FaLinkedin color="#0077B5" />
				</a>
				<a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social">
					<FaYoutube color="#FF0000" />
				</a>
				<a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social">
					<FaGithub color="#eee" />
				</a>
			</div>
		</div>
	)
}
export {Socials}
