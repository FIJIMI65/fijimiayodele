import { Fragment, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIsMobile } from "../hooks/IsMobile";
import profile from "../img/profile_Picture.jpg"
import { Entry } from "../entry/entry";

function Home () {
	const [isAboutSummarized, setIsAboutSummarized] = useState(true);
	const [isSpecializationSummarized, setIsSpecializationSummarized] = useState(true);
	const {
		name,
		email,
		occupation,
		company,
		skills,
		tangline,
		aboutSectioned,
		aboutUnsectionedSummary,
		aboutUnsectioned,
		specializations,
	} = Entry();
	const isMobile = useIsMobile();
	// const skillStyles = {
	// 	fontSize: 28,
	// }
	const removeWhiteSpacesAndNewLines = (text) => {
		// console.log(
		// 	'\ntext:', text,
		// 	'\ntext.description:', text?.description
		// );
		return Array.isArray(text)?text.description.replace(/\n/g, '').replace(/\s{2,}/g, ''):text.replace(/\n/g, '').replace(/\s{2,}/g, '')
	}
	const cutAndAddEllipsis = (text = '', maxWords = 20) => {
		if (Array.isArray(text)) {
			const firstObject = text[0].description || '';
			// console.log({firstObject})
			const words = removeWhiteSpacesAndNewLines(firstObject).split(' ');
			return words.length > maxWords ?
				words.slice(0, maxWords).join(' ') + '...'
				:
				firstObject;
		} else {
			const words = text.trim().split(' ');
			return words.length > maxWords
				? words.slice(0, maxWords).join(' ') + '...'
				: text;
		}
	};
	const specializationLimit = 30
	let cutSpecializationIndex = 0;
	// Loop through specializations until a description exceeds the limit
	for (let i = 0; i < specializations.length; i++) {
		const wordCount = removeWhiteSpacesAndNewLines(specializations[i].description).split(' ').length;
		if (wordCount > specializationLimit) {
			cutSpecializationIndex = i + 1; // Include the current item
			break;
		}
	}
	
	// If none exceed the limit, show all
	if (cutSpecializationIndex === 0) {
		cutSpecializationIndex = specializations.length;
	}
	const finalSpecializationArray = isSpecializationSummarized?
		specializations.slice(0, cutSpecializationIndex)
		:
		specializations;
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
												<em style={{whiteSpace: 'pre'}}>{name}</em><br/>
												<div style={!isMobile?styles.renderEmailAndSkills:undefined}>
													{/* skills */}
													<div>
														{(skills.length > 1) ?
														skills.map((skill, index)=>(
															<span key={index} className="skills">||{skill}<br/></span>
														))
														:
														<span className="skills">{skills[0]}</span>}
													</div>
													{!isMobile&&<h3 style={{alignSelf: "flex-end"}}><span style={styles.email}>Email: </span> {email}</h3>}
												</div>
											</h1>
											{/* tangline */}
											<h4>{tangline}</h4>
											{/* email */}
											{isMobile&&<h3><span style={styles.email}>Email: </span> {email}</h3>}
										</div>
										<div className="row">
											<div className="col-md-12">
												<div className="home-box-content" style={{display: 'flex', flexDirection: 'column'}}>
													<div>
													{isMobile ?
														<>
														{/* Mobile about */}
																<div className={styles.profileStyle.classLeft}>
																	<div className={styles.profileStyle.classRight} style={{...{paddingBottom: '20px'}}}>
																		{/* image */}
																		<img src={profile} alt="" height={styles.profileStyle.height} width={styles.profileStyle.width} style={styles.profileStyle.imgBorder} />
																	</div>
																	<p>
																		{/* aboutSectioned */}
																		{aboutSectioned}
																	</p>
																</div>
														</>
														:
														<>
														{/* PC about */}
																<div className={styles.profileStyle.classLeft}>
																	<p>
																		{/* aboutSectioned */}
																		{aboutSectioned}
																	</p>
																</div>
																<div className={styles.profileStyle.classRight}>
																	{/* image */}
																	<img src={profile} alt="" height={styles.profileStyle.height} width={styles.profileStyle.width} style={styles.profileStyle.imgBorder} />
																</div>
														</>}
													</div>
													<div>
														<p style={{...styles.profileStyle.aboutColor, ...styles.profileStyle.pre}}>
															{/* aboutUnsectionedSummary */}
															{isAboutSummarized?cutAndAddEllipsis(aboutUnsectionedSummary, isMobile?6:40):aboutUnsectioned}
														</p>
													</div>
													<div className="primary-button">
														<a href="##none" style={styles.buttonStyle}
														onClick={(e) => setIsAboutSummarized(prev=>!prev)}>
															{isAboutSummarized?'Read More':'Collapse'}
															</a>
													</div>



													{<>
														{/* PC specialization */}
														<div>
															<p style={{...styles.profileStyle.aboutColor, ...styles.profileStyle.pre}}>
																{finalSpecializationArray.map((spec, index) => {
																		return (
																			<Fragment key={index}>
																				<br/>
																				<div className="specializationTitle">
																					<FontAwesomeIcon
																					icon={spec.icon}
																					color={spec.color}
																					style={{marginRight: 10, fontSize: '20px'}}
																					/>
																					<span>{spec.title}</span>
																				</div>
																				<span>{removeWhiteSpacesAndNewLines(isSpecializationSummarized?cutAndAddEllipsis(spec.description, specializationLimit):spec.description)}</span>
																				<br/>
																			</Fragment>
																		)})
																}
															</p>
														</div>
													</>}
													<div className="primary-button">
														<a href="##none" style={styles.buttonStyle}
														onClick={(e) => setIsSpecializationSummarized(prev=>!prev)}>
															{isSpecializationSummarized?'Read More':'Collapse'}
														</a>
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
		pre: {whiteSpace: 'pre-wrap'},
	},
	renderEmailAndSkills: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	email: {
		textTransform: 'none',
		whiteSpace: 'pre'
	},
	pcEmail: {
		alignSelf: '',
	},
	buttonStyle: {
		color: '#fff',
		textDecoration: 'none',
	}

}

export {Home}
