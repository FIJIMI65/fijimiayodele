import { useEffect, useState } from "react";
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaLinkedin,
	FaYoutube,
	FaGithub,
	FaEye,
	FaDownload,
} from "react-icons/fa";
import resume from '../entry/Fijimi_Ayodele.pdf';

function Socials () {
	// scroll states
	const [showSocials, setShowSocials] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [resumeOpen, setResumeOpen] = useState(false);
	const toggleDropdown = () => setResumeOpen(prev=>!prev);
	const closeDropdown = () => setResumeOpen(false);

	// handles display and hiding of the social icons
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
		
			if (currentScrollY > lastScrollY) {
				setShowSocials(false); // hide when scrolling down
			} else {
				setShowSocials(true); // show when scrolling up
			}
			setResumeOpen(false)
			setLastScrollY(currentScrollY);
		};
	
		window.addEventListener('scroll', handleScroll);
	
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollY]);
	const socialIcons = [
		// {
		// 	icon: <FaFacebook color="#1877F2" />,
		// 	link: 'https://facebook.com'
		// },
		{
			icon: <FaTwitter color="#1DA1F2" />,
			link: 'https://twitter.com'
		},
		// {
		// 	icon: <FaInstagram color="#E4405F" />,
		// 	link: 'https://instagram.com'
		// },
		{
			icon: <FaLinkedin color="#0077B5" />,
			link: 'https://www.linkedin.com/in/fijimi-ayodele-b77539187/'
		},
		// {
		// 	icon: <FaYoutube color="#FF0000" />,
		// 	link: 'https://youtube.com'
		// },
		{
			icon: <FaGithub color="#eeeeee" />,
			link: 'https://github.com/FIJIMI65'
		},
	]
	// console.log({resumeOpen})
	return (
		<>
		{resumeOpen&&
			<div
			className="resume-dropdown-container"
			onClick={closeDropdown} />}
		<div className={`socials_container ${!showSocials ? 'hidden' : ''}`}>
			<div className="socials">
				<div className="resume-actions" style={{ position: 'relative' }}>
					<button onClick={toggleDropdown} className={`resume-button ${resumeOpen?'resume-button-active':undefined}`}>
						Resume
					</button>

					{resumeOpen && (
						<>
						<div className="resume-dropdown" onClick={(e) => e.stopPropagation()}>
							{/* <div> */}
							<a
								href={resume}
								target="_blank"
								rel="noopener noreferrer"
								onClick={closeDropdown}
								// style={{}}
								>
									<FaEye style={styles.downloadIcons} />
									Preview Resume
								</a>
							{/* </div>
							<div> */}
								<a
								href={resume}
								download="Fijimi_Ayodele_Resume.pdf"
								onClick={closeDropdown}
								>
									<FaDownload style={styles.downloadIcons} />
									Download Resume
								</a>
							{/* </div> */}
						</div>
						</>
					)}
				</div>

				{socialIcons.map((social, index) => (
					<a key={index}
					href={social.link}
					target="_blank"
					rel="noopener noreferrer"
					className="social">
						{social.icon}
					</a>
				))}
			</div>
		</div>
		</>
	)
}
export {Socials}

const styles = {
	downloadIcons: { marginRight: '8px' }
};
