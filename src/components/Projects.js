import { useRef, useState, useEffect } from "react"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useIsMobile } from "../hooks/IsMobile"
import { Entry } from "../entry/entry"

const arrowSize = 55
const descriptionLength = 9

function Projects () {
	const { projects:projectArray } = Entry();
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
																	<a href={project.link}>
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
