import React from "react";
import { Helmet } from "react-helmet";

const jimmy = {
	"@context": "https://schema.org",
	"@type": "Person",
	"name": "Fijimi Ayodele",
	"url": "https://fijimi65.github.io/fijimiayodele/",
	"image": "https://fijimi65.github.io/fijimiayodele/blutut_black180pxy.png",
	"jobTitle": "Data Scientist | Data Analyst | Machine Learning | AI",
	"description": "With cross-industry experience in e-commerce, energy, finance and healthcare domains.",
	"sameAs": [
		"https://www.linkedin.com/in/fijimi-ayodele/",
		"https://github.com/FIJIMI65",
	],
}
const website = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	"name": "Fijimi Ayodele's Website",
	"url": "https://fijimi65.github.io/fijimiayodele/"
}

const FijimiSchema = () => (
	<Helmet>
		<script type="application/ld+json">
		{JSON.stringify(jimmy)}
		</script>
		<script type="application/ld+json">
			{JSON.stringify(website)}
		</script>
	</Helmet>
);

export default FijimiSchema;
