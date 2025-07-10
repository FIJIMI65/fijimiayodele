import { useRef, useState, useEffect } from "react"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useIsMobile } from "../hooks/IsMobile"
import { Entry } from "../entry/entry"
// import { cutAndAddEllipsis } from "./Home"

const arrowSize = 55
const descriptionLengthMobile = 10
const descriptionLengthPC = 22

function Projects () {
	const [clickedIndex, setClickedIndex] = useState(null);
	const { projects:projectArray } = Entry();
	const isMobile = useIsMobile();
	// console.log('isMobile:', isMobile)
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
	const handleClick = (index) => {
		setClickedIndex(index);
		setTimeout(() => setClickedIndex(null), 300); // Reset animation after 300ms
	};
	// console.log('1')
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
																<div
																key={index}
																className={`project-item ${clickedIndex === index ? "clicked" : ""}`}
																style={{ height: isMobile ? '200px' : '350px' }}
																onClick={() => handleClick(index)}
																>
																	<a
																	href={project.link}
																	style={styles.linkToProject}>
																		<img
																		src={project.thumbnail}
																		alt={`${project.alt}-${index + 1}`}
																		target="_blank"
																		rel="noopener noreferrer"/>
																		<div className="text-content">
																			<h4 className="project_h4">{project.title}</h4>
																			<p className="project_paragraph">
																				{isMobile
																				? (project.description.split(' ').length > descriptionLengthMobile
																					? project.description.split(' ').slice(0, descriptionLengthMobile).join(' ') + '...'
																					: project.description)
																				: project.description.split(' ').slice(0, descriptionLengthPC).join(' ') + '...'}
																			</p>
																		</div>
																	</a>
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

const styles = {
	linkToProject: {
		textDecoration: 'none',
		color: 'inherit'
	},
}