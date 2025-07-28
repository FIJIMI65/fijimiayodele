import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import dafetite from "../img/dafelogoWhiteTransparent.png"
import { DateHook } from "../hooks/DateHook";
import { useIsMobile } from "../hooks/IsMobile";
import { Entry } from "../entry/entry";
import { fetchBrevoKeyFromBackend } from "../hooks/useFetchApi";
import { useBrevoEmail } from "../hooks/useBrevoEmail";

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

async function getKey(apiKey, setApiKey, setApiEmail) {
	if (!apiKey) {
		// console.log('Fetching API key...');
		try {
			const endpoint = 'dafetite_brevo_api_key/dafetite_brevo_api'
			const response = await fetchBrevoKeyFromBackend(endpoint);
			if (response?.success && response?.key) {
				setApiKey(response.key);
				setApiEmail(response.email);
			} else {
				console.error('Failed to fetch API key:', response);
			}
		} catch (err) {
			console.error('Error while fetching API key:', err);
		}
	} else {
		// console.warn('Using existing API key');
	}
}

function Contact () {
	const { tangline } = Entry();
	const { sendContactEmails, success, loading, error, clearInfo } = useBrevoEmail(); // useBrevoEmail hook
	const [apiKey, setApiKey] = useState(null);
	const [apiEmail, setApiEmail] = useState(null);
	const isMobile = useIsMobile();
	const year = DateHook().todayYear;
	const [formData, setFormData] = useState(formValues);

	const handleInputChange = (e) => {
		getKey(apiKey, setApiKey, setApiEmail);
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	}

	// fetch API key on component mount
	useEffect(() => {
		if (!apiKey) getKey(apiKey, setApiKey, setApiEmail);
	}, []);

	const handleSubmit = async (e) => {
		// console.log("handleSubmit called");
		e.preventDefault();
		// console.warn('success before clearing:', success)
		clearInfo();
		// console.warn('success after clearing:', success)

		const config = {
			apiKey: apiKey, // 'brevo-api-key',
			apiEmail: apiEmail, // brevo email address
			ownerEmail: 'fijimiayodele@gmail.com', // your email',
			senderName: 'Fijimi Ayodele', // 'Your Website Name'
		};

		const cleanedData = {...formData, subject: 'Message Received! - Email confirmation'};
		try {
			// passed formData and config to the hook
			await sendContactEmails(cleanedData, config);
			// Success
			toast.success(
				<div>
					{/* use success response */}
					Success! {success}
					<br />
					Kindly check your inbox (or spam folder) for email
				</div>);
				setFormData(formValues); // Resets the form data
			// console.log("Emails sent successfully");
		} catch (err) {
			// Error
			toast.error(
				<div>
					{/* use error response */}
					Error: :::{error} ::::: {err.message}
				</div>);
			console.error("Failed to send emails:", error);
			console.error("Failed to send emails:", err);
		}
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
											<h4>Contact Me</h4>
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
															disabled={loading}>
																{loading ? "Sending..." : "Send Message"}
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
