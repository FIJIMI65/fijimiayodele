import { useState } from 'react';
import { DateHook } from './DateHook';
import { toTitleCase } from './caseConversion';
// import { config } from './myKey';
// import { useFetchApi } from './useFetchApi';

// Function to check the size of the email content
function checkEmailContentSize(content) {
	const emailHtml = content;
	const sizeInBytes = new Blob([emailHtml]).size;
	const sizeInKB = (sizeInBytes / 1024).toFixed(2);

	console.log(`Email size: ${sizeInKB} KB`);
}

// Function to send email using Brevo API
const sendEmail = async (emailData, apiKey) => {
	const response = await fetch('https://api.brevo.com/v3/smtp/email', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'api-key': apiKey
		},
		body: JSON.stringify(emailData)
	});

	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || `HTTP Error: ${response.status}`);
	}

	return response.json();
};

// Function to generate email content
const emailContentTemplate = ({ formData, type = 'owner' }) => {
	const { todaySeconds, todayMinutes, todayHours, todayDay, todayDateWithSuffix, todayMonthName, todayYear } = DateHook();
	const dateTimeStamp = `${todayDay}, ${todayDateWithSuffix} ${todayMonthName} ${todayYear} at exactly ${todayHours}:${todayMinutes}:${todaySeconds}`
	// console.log('dateTimeStamp:', dateTimeStamp);
	const h2 = type === 'owner' ? `New Message From - ${toTitleCase(formData.name)}` : 'Thank You for Your Message!';
	const socialIconStyle = 'width:24px;height:24px;vertical-align:middle;';
	const socialLinkStyle = 'margin:0 8px;text-decoration:none;display:inline-block;';
	const socialLinks = `
		<div style="text-align:center;">
			<a href="https://github.com/FIJIMI65" target="_blank" rel="noopener noreferrer" style="${socialLinkStyle}">
				<img src="https://raw.githubusercontent.com/DafetiteOgaga/dafetite_logo/refs/heads/main/github.png" alt="GitHub" style="${socialIconStyle}" />
			</a>
			<a href="https://www.linkedin.com/in/fijimi-ayodele/" target="_blank" rel="noopener noreferrer" style="${socialLinkStyle}">
				<img src="https://raw.githubusercontent.com/DafetiteOgaga/dafetite_logo/refs/heads/main/linkedin.png" alt="LinkedIn" style="${socialIconStyle}" />
			</a>
		</div>
	`;

	return `
		<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
			<h2 style="color:#333;border-bottom:2px solid rgba(0,0,0,0.5);padding-bottom:10px;">${h2}</h2>
			${
				type === 'owner'
				?
				`
					<div style="background:#f8f9fa;padding:20px;border-radius:8px;margin:20px 0;">
						<p><strong>From:</strong> ${toTitleCase(formData.name)}</p>
						<p><strong>Email:</strong> ${formData.email}</p>
						<p><strong>Time:</strong> ${dateTimeStamp}</p>
					</div>
					<div style="background:#fff;padding:20px;border-left:4px solid rgba(0,0,0,0.5);margin:20px 0;">
						<h3 style="color:#333;margin-top:0;">Message:</h3>
						<p style="line-height:1.6;color:#555;">${formData.message.replace(/\n/g, '<br>')}</p>
					</div>
					<div style="text-align:center;margin-top:30px;padding-top:20px;border-top:1px solid #eee;">
						<p style="color:#888;font-size:12px;">This message was sent from my portfolio website's contact form (${dateTimeStamp}).</p>
					</div>
				`
				:
				`
					<p style="color:#555;line-height:1.6;">Dear ${toTitleCase(formData.name)},</p>
					<p style="color:#555;line-height:1.6;">
						Thank you for reaching out.
						This is to let you know that I have received your message and will respond as soon as possible.
					</p>
					<p style="color:#555;line-height:1.6;">
						I typically respond within 24-48 hours.
						If your inquiry is urgent, please contact me directly.
					</p>
					<br/>
					<div>
						<img src="https://raw.githubusercontent.com/DafetiteOgaga/dafetite_logo/refs/heads/main/blutut_transparent140x120y.png" alt="Fijimi Ayodele" style="width:70px;height:auto;border-radius:5px;background-color:rgba(0,0,0,0.5);" />
					</div>
					<p style="color:#555;line-height:1.6;margin-top:0;">Thanks again,<br/>Fijimi Ayodele.</p>
					${socialLinks}
					<div style="text-align:center;margin-top:30px;padding-top:20px;border-top:1px solid #eee;">
						<p style="color:#888;font-size:12px;">This is an automated confirmation email (${dateTimeStamp}).</p>
					</div>
				`
			}
		</div>
	`;
};

// Custom hook for sending emails via Brevo
export const useBrevoEmail = () => {
	// console.log("useBrevoEmail hook loaded");
	const [success, setSuccess] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const sendContactEmails = async (formData, config) => {
		const { apiKey, apiEmail, ownerEmail, senderName } = config;
		// console.log('config:', config)

		if (!apiKey || !ownerEmail) {
			throw new Error('API key and owner email are required');
		}

		setLoading(true);
		setError(null);
		setSuccess(false);

		try {
			// Email content to myself (site owner)
			// checkEmailContentSize(emailContentTemplate({formData}));
			const ownerEmailData = {
				sender: {
					name: senderName,
					email: apiEmail
				},
				to: [{
					email: ownerEmail,
					name: senderName
				}],
				replyTo: {
					email: formData.email,
					name: toTitleCase(formData.name)
				},
				subject: `New Message from ${toTitleCase(formData.name)}`,
				htmlContent: emailContentTemplate({formData, type: 'owner'})
			};

			// Confirmation email to sender
			// checkEmailContentSize(emailContentTemplate({formData, type: 'visitor'}));
			const confirmationEmailData = {
				sender: {
					name: senderName,
					email: apiEmail
				},
				to: [{
					email: formData.email,
					name: toTitleCase(formData.name)
				}],
				replyTo: {
					email: ownerEmail,
					name: senderName
				},
				subject: formData.subject,
				htmlContent: emailContentTemplate({formData, type: 'visitor'})
			};

			// Send both emails
			await Promise.all([
				sendEmail(ownerEmailData, apiKey),
				sendEmail(confirmationEmailData, apiKey)
			]);

			setSuccess('Message sent.');
			// return { success: true, message: 'Emails sent successfully' };

		} catch (err) {
			setError(err.message);
			throw err;
		} finally {
			setLoading(false);
		}
	};

	return {
		sendContactEmails,
		success,
		loading,
		error,
		clearInfo: () => {
			setError(null);
			setSuccess("");
		}
	};
};
