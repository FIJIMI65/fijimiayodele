import { useIsMobile } from "../hooks/IsMobile";
import profile from "../img/profile_Picture.jpg"
import { Entry } from "../entry/entry";

function Home () {
	const { name, email,  occupation, company, skills, about1, about2 } = Entry();
	const isMobile = useIsMobile();
	return (
		<>
			{/* home section */}
			<section className="panel b-blue" id="1">
				<article className="panel__wrapper">
					<div className="panel__content">
						<div className="container">
							<div className="row">
								<div className="col-md-8 col-md-offset-2">
									<div className="home-content">
										<div className="home-heading">
											<h1 style={{marginBottom: 0}}>
												{/* name */}
												<em>{name}</em><br/>
												{/* skills */}
												{(skills.length > 1) ? skills.map((skill, index)=>(
													<span key={index}>||{skill}<br/></span>
												))
												:
												<span>{skills[0]}</span>}
											</h1>
											{/* email */}
											<h3><span style={{textTransform: 'none', whiteSpace: 'pre'}}>Email: </span> {email}</h3>
										</div>
										<div className="row">
											<div className="col-md-12">
												<div className="home-box-content" style={{display: 'flex', flexDirection: 'column'}}>
													{isMobile ?
														<>
															<div>
																<div className={styles.profileStyle.classLeft}>
																	<div className={styles.profileStyle.classRight} style={{...{paddingBottom: '20px'}}}>
																		<img src={profile} alt="" height={styles.profileStyle.height} width={styles.profileStyle.width} style={styles.profileStyle.imgBorder} />
																	</div>
																	{/* occupation and company */}
																	{/* <h4>{occupation}<em style={styles.profileStyle.occupationColor}>{company}</em></h4> */}
																	<p>
																		{/* about1 */}
																		{about1}
																	</p>
																</div>
															</div>
															<div>
																<p style={styles.profileStyle.aboutColor}>
																	{/* about2 */}
																	{about2}
																</p>
															</div>
														</>
														:
														<>
															<div>
																<div className={styles.profileStyle.classLeft}>
																	{/* occupation and company */}
																	{/* <h4>{occupation}<em style={styles.profileStyle.occupationColor}>{company}</em></h4> */}
																	<p>
																		{/* about1 */}
																		{about1}
																	</p>
																</div>
																<div className={styles.profileStyle.classRight}>
																	<img src={profile} alt="" height={styles.profileStyle.height} width={styles.profileStyle.width} style={styles.profileStyle.imgBorder} />
																</div>
															</div>
															<div>
																<p style={styles.profileStyle.aboutColor}>
																	{/* about2 */}
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
		</>
	)
}

const styles = {
	profileStyle: {
		height: '150px',
		width: '150px',
		classLeft: 'left-text',
		classRight: 'right-image',
		imgBorder: {
			borderRadius: '50%',
			padding: '2px',
			border: '2px solid rgb(255, 255, 255)'
		},
		occupationColor: {color: '#00A86B'},
		aboutColor: {color: '#fff'},
	},
}

export {Home}
