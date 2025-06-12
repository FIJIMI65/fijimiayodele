import dafetite from "../img/dafelogoWhiteTransparent.png"
import { DateHook } from "../hooks/DateHook";
import { useIsMobile } from "../hooks/IsMobile";
import { Entry } from "../entry/entry";

function Contact () {
	const { tangline } = Entry();
	const isMobile = useIsMobile();
	const year = DateHook().todayYear;
	return (
		<>
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
													{tangline}
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-12">
									<div className="footer">
										<p><span style={!isMobile?styles.footer : {}}>
										Copyright &copy; {year} | Developed by <a href="https://dafetiteogaga.github.io/dafetite/"><img src={dafetite} alt="dafetite" className="dafetite" /></a>
										</span></p>
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
	footer: {
		background: '#0303036e',
		padding: '8px',
		borderRadius: '10px',
	}
}

export default Contact
