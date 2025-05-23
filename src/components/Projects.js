import { useRef, useState, useEffect } from "react"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import projectItem1 from "../img/project-item-01.jpg"
import projectItem2 from "../img/project-item-02.jpg"
import projectItem3 from "../img/project-item-03.jpg"
import { useIsMobile } from "../hooks/IsMobile"

const arrowSize = 55
const descriptionLength = 9
const projectArray = [
	{
		thumbnail: projectItem1,
		alt: "project",
		title: "Best Design",
		description: "1Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
		link: "#",
		buttonText: "More",
	},
	{
		thumbnail: projectItem2,
		alt: "project",
		title: "Creative Pen",
		description: "2Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
		link: "#",
		buttonText: "More",
	},
	{
		thumbnail: projectItem3,
		alt: "project",
		title: "Nice Capture",
		description: "3Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
		link: "#",
		buttonText: "More",
	},
	{
		thumbnail: projectItem1,
		alt: "project",
		title: "Best Design",
		description: "4Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
		link: "#",
		buttonText: "More",
	},
	{
		thumbnail: projectItem2,
		alt: "project",
		title: "Creative Pen",
		description: "5Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
		link: "#",
		buttonText: "More",
	},
	{
		thumbnail: projectItem3,
		alt: "project",
		title: "Nice Capture",
		description: "6Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
		link: "#",
		buttonText: "More",
	},
	{
		thumbnail: projectItem1,
		alt: "project",
		title: "Best Design",
		description: "7Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
		link: "#",
		buttonText: "More",
	},
	{
		thumbnail: projectItem2,
		alt: "project",
		title: "Creative Pen",
		description: "8Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
		link: "#",
		buttonText: "More",
	},
	{
		thumbnail: projectItem3,
		alt: "project",
		title: "Nice Capture",
		description: "9Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
		link: "#",
		buttonText: "More",
	},
	{
		thumbnail: projectItem3,
		alt: "project",
		title: "Nice Capture",
		description: "10Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
		link: "#",
		buttonText: "More",
	},
	{
		thumbnail: projectItem2,
		alt: "project",
		title: "Creative Pen",
		description: "11Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
		link: "#",
		buttonText: "More",
	},
	{
		thumbnail: projectItem3,
		alt: "project",
		title: "Nice Capture",
		description: "12Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
		link: "#",
		buttonText: "More",
	},
	{
		thumbnail: projectItem1,
		alt: "project",
		title: "Best Design",
		description: "13Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
		link: "#",
		buttonText: "More",
	},
	{
		thumbnail: projectItem2,
		alt: "project",
		title: "Creative Pen",
		description: "14Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
		link: "#",
		buttonText: "More",
	},
	{
		thumbnail: projectItem3,
		alt: "project",
		title: "Nice Capture",
		description: "15Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
		link: "#",
		buttonText: "More",
	},
	{
		thumbnail: projectItem3,
		alt: "project",
		title: "Nice Capture",
		description: "16Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
		link: "#",
		buttonText: "More",
	},
	{
		thumbnail: projectItem3,
		alt: "project",
		title: "Nice Capture",
		description: "17Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
		link: "#",
		buttonText: "More",
	},
]

function Projects () {
	const isMobile = useIsMobile();
	console.log('isMobile:', isMobile)
	const containerRef = useRef(null)
	const [leftHoverColor, setLeftHoverColor] = useState('#8d8989')
	const [rightHoverColor, setRightHoverColor] = useState('#8d8989')
	const [atStart, setAtStart] = useState(true);
	const [atEnd, setAtEnd] = useState(false);
	
	const chunkedProjects = [];
	for (let i = 0; i < projectArray.length; i += 6) {
		chunkedProjects.push(projectArray.slice(i, i + 6));
	}
	const checkScrollPosition = () => {
		const scrollPosition = containerRef.current;
		if (!scrollPosition) return;
		setAtStart(scrollPosition.scrollLeft === 0);
		setAtEnd(scrollPosition.scrollLeft + scrollPosition.offsetWidth >= scrollPosition.scrollWidth - 1);
	};
	useEffect(() => {
		const scrollPosition = containerRef.current;
		if (!scrollPosition) return;

		// Initial check
		checkScrollPosition();

		// Attach scroll listener
		scrollPosition.addEventListener('scroll', checkScrollPosition);
		return () => scrollPosition.removeEventListener('scroll', checkScrollPosition);
	}, []);

	const scrollHandler = (direction) => {
		if (containerRef.current) {
			containerRef.current.scrollBy({ left: direction==='left'?-containerRef.current.offsetWidth:containerRef.current.offsetWidth, behavior: 'smooth' });
		}
	};
	const hoverHandler = (action='') => {
		if (action === 'left') {
			setLeftHoverColor('#1f2327');
		} else if (action === 'right') {
			setRightHoverColor('#1f2327');
		} else {
			setLeftHoverColor('#8d8989');
			setRightHoverColor('#8d8989');
		}
	}
	return (
		<>
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
												<div style={{display: 'flex', flexDirection: 'column'}}>
													<div style={{ position: 'relative' }}>
														{/* Left Arrow */}
														{!atStart ?
														<div
														onClick={() => scrollHandler('left')}
														onMouseEnter={() => hoverHandler('left')}
														onMouseLeave={() => hoverHandler('')}
														className="project_arrow arrow_left">
															<FaChevronLeft size={arrowSize} color={leftHoverColor} />
														</div>:null}
														<div ref={containerRef} className="owl-carousel owl-theme projectContainer">
														{chunkedProjects.map((group, i) => (
															<div key={i} className="projectPage">
															{group.map((project, index) => (
																<div key={index} className="project-item">
																	<a href={project.link} data-lightbox="image-1">
																		<img src={project.thumbnail} alt={`${project.alt}-${index + 1}`} />
																	</a>
																	<div className="text-content">
																		<h4 className="project_h4">{project.title} {index + 1}</h4>
																		<p className="project_paragraph">
																			{isMobile
																			? (project.description.split(' ').length > descriptionLength
																				? project.description.split(' ').slice(0, descriptionLength).join(' ') + '...'
																				: project.description)
																			: project.description}
																		</p>
																		<div className="primary-button">
																			<a href={project.link}>{project.buttonText}</a>
																		</div>
																	</div>
																</div>
															))}
															</div>
														))}
														</div>
														{/* Right Arrow */}
														{!atEnd ?
														<div
														onClick={() => scrollHandler('right')}
														onMouseEnter={() => hoverHandler('right')}
														onMouseLeave={() => hoverHandler('')}
														className="project_arrow arrow_right"
														>
															<FaChevronRight size={arrowSize} color={rightHoverColor} />
														</div>:null}
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
		</>
	)
}
export {Projects}
