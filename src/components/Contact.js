import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from 'react-toastify';
import dafetite from "../img/dafelogoWhiteTransparent.png"
import { DateHook } from "../hooks/DateHook";
import { useIsMobile } from "../hooks/IsMobile";
import { Entry } from "../entry/entry";

const formInputValues = [
	{
		type: "text",
		name: "name",
		id: "name",
		placeholder: "Your Name",
	},
	{
		type: "email",
		name: "email",
		id: "email",
		placeholder: "Email",
	}
]
const formValues = {
	name: "",
	email: "",
	message: ""
}
function Contact () {
	const { tangline } = Entry();
	const isMobile = useIsMobile();
	const year = DateHook().todayYear;
	const [isSending, setIsSending] = useState(false);
	const [formData, setFormData] = useState(formValues);
	const handleInputChange = (e) => {
		// toast.success(<div><strong>Success:</strong> Message sent successfully!</div>);
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSending(true);

		// First, send the message youself, site owner (you)
		emailjs.send(
			'service_2x0u2dm',      // your service ID
			'template_ddksigd',     // Template A - message to you
			formData,
			'qQE_DwjBJWwq6sEOg'     // your public key
			).then(() => {
				// Then send acknowledgment to the sender
				emailjs.send(
					'service_2x0u2dm',    // same service
					'template_5w7eds8',   // Template B - thank-you to user
					formData,
					'qQE_DwjBJWwq6sEOg'   // your public key
				).then(() => {
					toast.success(
						<div>
							<strong>Success:</strong> Message sent successfully!
						</div>);
					setFormData(formValues);
				}).catch((error) => {
					toast.error(
						<div>
							<strong>Failed:</strong> {error.text}
						</div>);
				});

			}).catch((error) => {
				alert('Failed to send message: ' + error.text);
			}).finally(() => {
				setIsSending(false);
			});
	};
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
													<form onSubmit={handleSubmit}>
														<fieldset>
															{formInputValues.map((input, index) => (
																<input
																	key={index}
																	type={input.type}
																	name={input.name}
																	className="form-control"
																	id={input.id}
																	placeholder={input.placeholder}
																	value={formData[input.name]}
																	onChange={handleInputChange}
																	required
																/>
															))}
														</fieldset>
														<fieldset>
															<textarea
															name="message"
															rows="6"
															className="form-control textareaContainer"
															id="message"
															placeholder="Message"
															value={formData.message}
															onChange={handleInputChange}
															required
															></textarea>
														</fieldset>
														<fieldset>
															<button
															type="submit"
															id="form-submit"
															className="btn"
															disabled={isSending}>
																{isSending ? "Sending..." : "Send Message"}
															</button>
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
										Copyright &copy; {year} | Developed by
											<a
											target="_blank"
											rel="noopener noreferrer"
											href="https://dafetiteogaga.github.io/dafetite/">
												<img src={dafetite} alt="dafetite ogaga" className="dafetite" />
											</a>
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
