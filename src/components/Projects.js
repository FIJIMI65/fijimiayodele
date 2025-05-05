import projectItem1 from "../img/project-item-01.jpg"
import projectItem2 from "../img/project-item-02.jpg"
import projectItem3 from "../img/project-item-03.jpg"

function Projects () {
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
