import { useEffect, useState } from "react";
// import home from "../img/home-icon.png"
// import about from "../img/about-icon.png"
// import projects from "../img/projects-icon.png"
// import contact from "../img/contact-icon.png"
// import profile from "../img/jimmy1.jpeg"
import profile from "../img/dafetite.jpeg"
// import aboutImage from "../img/about-image.png"
import projectItem1 from "../img/project-item-01.jpg"
import projectItem2 from "../img/project-item-02.jpg"
import projectItem3 from "../img/project-item-03.jpg"
// import projectItem4 from "../img/project-item-04.jpg"
// import projectItem5 from "../img/project-item-05.jpg"
// import projectItem6 from "../img/project-item-06.jpg"
// import projectItem7 from "../img/project-item-07.jpg"
import { DateHook } from "../hooks/DateHook";
import dafetite from "../img/dafelogoWhiteTransparent.png"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin,
	FaYoutube, FaHome, FaProjectDiagram, FaInfoCircle } from "react-icons/fa";
import { useIsMobile } from "../hooks/IsMobile";
import * as Ficons from "react-icons/fa";
// import $ from 'jquery';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/owl.carousel';

function Home () {
	console.log(Ficons)
	const [showNavMenu, setShowNavMenu] = useState(false);
	const isMobile = useIsMobile();
	const year = DateHook().todayYear;
	const navMenuHandler = () => setShowNavMenu(!showNavMenu);

	useEffect(() => {
		const panels = document.querySelectorAll(".panel__content");
		const vh = window.innerHeight;
	
		const scrollFx = () => {
			const ds = window.scrollY;
			const offset = vh / 4;
		
			panels.forEach((panel) => {
				if (panel.parentElement.offsetTop < ds + offset) {
				panel.classList.add("panel__content--active");
				} else {
				panel.classList.remove("panel__content--active");
				}
			});
		};
	
		// Reveal the first panel by default
		panels[0]?.classList.add("panel__content--active");
	
		// Attach the event listener
		window.addEventListener("scroll", scrollFx);
	
		// Cleanup event listener on unmount
		return () => window.removeEventListener("scroll", scrollFx);
	}, []);
	const occupation = 'Data Scientist @'
	const jobTitle = 'Texas Tech'
	const about1 = `As a zealous Data Analyst Data Scientist with a background in Electrical Engineering,
					I have passion to harness the power of data to drive innovation and solve complex
					real-world data challenges. With years of experience in leveraging data-driven insights
					to make informed decisions and effectively communicating these complex concepts to
					non-technical stakeholders.`
	const about2 = `I look forward to collaborate with multidisciplinary co-teams
					contributing my quota to organizations from data collection and cleaning to preprocessing,
					visualization and to model evaluation and deployment.
					
					I thrive to push the boundaries of artificial intelligence and data science by using different
					Machine Learning algorithm (Supervised Learning) to find insights from Data and thereby
					building Model for predictive purposes.
					
					I have good leadership skills, communication skills and always dedicated to tasks.`
	const profileStyle = {
		height: '160px',
		width: '175px',
		classLeft: 'left-text',
		classRight: 'right-image',
		imgBorder: {borderRadius: '50%'},
		occupationColor: {color: '#00A86B'},
		aboutColor: {color: '#fff'},
	}
	return (
		<>
			{/* nav */}
			<nav className="nav">
				<div onClick={navMenuHandler}
				className="burger">
					<div className="burger__patty"></div>
				</div>

				{<ul className={`nav__list ${showNavMenu ? "nav__list--active" : ""}`}>
					<li className="nav__item">
						<a onClick={navMenuHandler} href="#1" className="nav__link">
							{/* <img src={home} alt=""/> */}
							<FaHome size={50} color="#fff" />
						</a>
					</li>
					{/* <li className="nav__item">
						<a onClick={navMenuHandler} href="#2" className="nav__link c-yellow scrolly">
							<img src={about} alt=""/>
						</a>
					</li> */}
					<li className="nav__item">
						<a onClick={navMenuHandler} href="#3" className="nav__link">
							{/* <img src={projects} alt=""/> */}
							<FaProjectDiagram size={50} color="#fff" />
						</a>
					</li>
					<li className="nav__item">
						<a onClick={navMenuHandler} href="#4" className="nav__link">
							{/* <img src={contact} alt=""/> */}
							<FaInfoCircle size={50} color="#fff" />
						</a>
					</li>
				</ul>}
			</nav>

			{/* home section */}
			<section className="panel b-blue" id="1">
				<article className="panel__wrapper">
					<div className="panel__content">
						<div className="container">
							<div className="row">
								<div className="col-md-8 col-md-offset-2">
									<div className="home-content">
										<div>
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
											</div>
										</div>
										<div className="home-heading">
											<h1><em>Fijimi Ayodele</em><br/>|| DATA SCIENTist <br/>|| DATA ANALYST <br/>|| MACHINE LEARNING</h1>
										</div>
										<div className="row">
											<div className="col-md-12">
												<div className="home-box-content" style={{display: 'flex', flexDirection: 'column'}}>
													{isMobile ?
														<>
															<div>
																<div className={profileStyle.classLeft}>
																	<div className={profileStyle.classRight} style={{...{paddingBottom: '20px'}}}>
																		<img src={profile} alt="" height={profileStyle.height} width={profileStyle.width} style={profileStyle.imgBorder} />
																	</div>
																	<h4>{occupation}<em style={profileStyle.occupationColor}>{jobTitle}</em></h4>
																	<p>
																		{about1}
																	</p>
																</div>
															</div>
															<div>
																<p style={profileStyle.aboutColor}>
																	{about2}
																</p>
															</div>
														</>
														:
														<>
															<div>
																<div className={profileStyle.classLeft}>
																	<h4>{occupation}<em style={profileStyle.occupationColor}>{jobTitle}</em></h4>
																	<p>
																		{about1}
																	</p>
																</div>
																<div className={profileStyle.classRight}>
																	<img src={profile} alt="" height={profileStyle.height} width={profileStyle.width} style={profileStyle.imgBorder} />
																</div>
															</div>
															<div>
																<p style={profileStyle.aboutColor}>
																	{about2}
																</p>
															</div>
														</>}
													<div className="primary-button">
														<a href="#2">Discover More</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>
			</section>

			{/* about section */}
			{/* <section className="panel b-yellow" id="2">
				<article className="panel__wrapper">
					<div className="panel__content">
						<div className="container">
							<div className="row">
								<div className="col-md-8 col-md-offset-2">
									<div className="about-content">
										<div className="heading">
											<h4>About us</h4>
										</div>
										<div className="row">
											<div className="col-md-12">
												<div className="about-box-content">
													<img src={aboutImage} alt=""/>
												</div>
											</div>
											<div className="col-md-7 col-md-offset-5">
												<div className="about-box-text">
													<h4>Curabitur varius sapien</h4>
													<p>Nulla vel accumsan dui. Aliquam tincidunt elit elit, nec iaculis neque interdum dictum. Donec venenatis quam enim, eu mattis arcu rhoncus id. Ut ac urna tellus.</p>
													<div className="primary-button">
														<a href="#3">Discover More</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>
			</section> */}

			{/* projects section */}
			<section className="panel b-red" id="3">
				<article className="panel__wrapper">
					<div className="panel__content">
						<div className="container">
							<div className="row">
								<div className="col-md-8 col-md-offset-2">
									<div className="projects-content">
										<div className="heading">
											<h4>Recent Projects</h4>
										</div>
										<div className="row">
											<div className="col-md-12">
												<div className="owl-carousel owl-theme projects-container">
													<div>
														<div className="project-item">
															<a href="../img/project-item-01.jpg" data-lightbox="image-1"><img src={projectItem1} alt=""/></a>
															<div className="text-content">
																<h4>Best Design</h4>
																<p>Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.</p>
																<div className="primary-button">
																	<a href="/">Discover More</a>
																</div>
															</div>
														</div>
													</div>
													<div>
														<div className="project-item">
															<a href="../img/project-item-02.jpg" data-lightbox="image-1"><img src={projectItem2} alt=""/></a>
															<div className="text-content">
																<h4>Creative Pen</h4>
																<p>Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.</p>
																<div className="primary-button">
																	<a href="/">Discover More</a>
																</div>
															</div>
														</div>
													</div>
													<div>
														<div className="project-item">
															<a href="../img/project-item-03.jpg" data-lightbox="image-1"><img src={projectItem3} alt=""/></a>
															<div className="text-content">
																<h4>Nice Capture</h4>
																<p>Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.</p>
																<div className="primary-button">
																	<a href="/">Discover More</a>
																</div>
															</div>
														</div>
													</div>
													{/* <div>
														<div className="project-item">
															<a href="../img/project-item-04.jpg" data-lightbox="image-1"><img src={projectItem4} alt=""/></a>
															<div className="text-content">
																<h4>This Moment</h4>
																<p>Lorem ipsum dolor sit amet, adipis scing elit etiam sit amet ante vehicula, aliquam mauris in, luctus neque.</p>
																<div className="primary-button">
																	<a href="/">Discover More</a>
																</div>
															</div>
														</div>
													</div>
													<div>
														<div className="project-item">
															<a href="../img/project-item-05.jpg" data-lightbox="image-1"><img src={projectItem5} alt=""/></a>
															<div className="text-content">
																<h4>Artwork</h4>
																<p>Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.</p>
																<div className="primary-button">
																	<a href="/">Discover More</a>
																</div>
															</div>
														</div>
													</div>
													<div>
														<div className="project-item">
															<a href="../img/project-item-06.jpg" data-lightbox="image-1"><img src={projectItem6} alt=""/></a>
															<div className="text-content">
																<h4>Item Sixth</h4>
																<p>Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.</p>
																<div className="primary-button">
																	<a href="/">Discover More</a>
																</div>
															</div>
														</div>
													</div> */}
													{/* <div>
														<div className="project-item">
															<a href="../img/project-item-07.jpg" data-lightbox="image-1"><img src={projectItem7} alt=""/></a>
															<div className="text-content">
																<h4>Last Item</h4>
																<p>Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.</p>
																<div className="primary-button">
																	<a href="/">Discover More</a>
																</div>
															</div>
														</div>
													</div> */}
													{/* <div className="owl-nav">
														<div className="owl.nav active">
															<span>ijiijij</span>
														</div>
													</div> */}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>
			</section>

			{/* contact section */}
			<section className="panel b-green" id="4">
				<article className="panel__wrapper">
					<div className="panel__content">
						<div className="container">
							<div className="row">
								<div className="col-md-8 col-md-offset-2">
									<div className="contact-content">
										<div className="heading">
											<h4>Contact</h4>
										</div>
										<div className="row">
											{/* <div> */}
												<div className="col-md-8">
													<div className="contat-form">
														<form id="contact" action="" method="post">
															<fieldset>
																<input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required />
															</fieldset>
															<fieldset>
																<input name="email" type="email" className="form-control" id="email" placeholder="Email" required />
															</fieldset>
															<fieldset>
																<textarea name="message" rows="6" className="form-control" id="message" placeholder="Message" required></textarea>
															</fieldset>
															<fieldset>
																<button type="submit" id="form-submit" className="btn">Send Message</button>
															</fieldset>
														</form>
													</div>
												</div>
												<div className="col-md-4">
													<div className="more-info">
														<p>
															Lorem ipsum dolor , consectetur adipiscing elit. Nunc purus ligula, ullamcorper id velit id, vestibulum auc sapien. Sed quis mauris eget sem imperdiet rhoncus.
															<br/><br/>
															<em>
																3344 Etiam mauris erat,
																<br/>
																Vestibulum eu augue nec, 10550
															</em>
														</p>
													</div>
												</div>
											{/* </div> */}
										</div>
										
									</div>
								</div>
								<div className="col-md-12">
									<div className="footer"
									// style={{marginTop: '40px'}}
									>
										<p>
										Copyright &copy; {year} | Developed by <a href="https://dafetiteogaga.github.io/dafetite/"><img src={dafetite} alt="dafetite" className="dafetite" /></a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>
			</section>

		</>
	)
}
export { Home }
