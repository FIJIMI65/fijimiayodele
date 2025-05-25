import projectItem1 from "../img/project-item-01.jpg"
import projectItem2 from "../img/project-item-02.jpg"
import projectItem3 from "../img/project-item-03.jpg"

function Entry () {
	const name = `
	Fijimi Ayodele
	` // ###### Do not touch/change this line

	const email = `
	jimmyayodele@gmail.com
	` // ###### Do not touch/change this line

	const occupation = `
	Data Scientist @
	` // ###### Do not touch/change this line

	const company = `
	Texas Tech
	` // ###### Do not touch/change this line

	const skills = [
		`
		DATA SCIENTIST
		`, `
		DATA ANALYST
		`, `
		MACHINE LEARNING
		`]

	const about1 = `
					As a zealous Data Analyst Data Scientist with a background in Electrical Engineering,
					I have passion to harness the power of data to drive innovation and solve complex
					real-world data challenges. With years of experience in leveraging data-driven insights
					to make informed decisions and effectively communicating these complex concepts to
					non-technical stakeholders.
					` // ###### Do not touch/change this line
	const about2 = `
					I look forward to collaborate with multidisciplinary co-teams
					contributing my quota to organizations from data collection and cleaning to preprocessing,
					visualization and to model evaluation and deployment.
					
					I thrive to push the boundaries of artificial intelligence and data science by using different
					Machine Learning algorithm (Supervised Learning) to find insights from Data and thereby
					building Model for predictive purposes.
					
					I have good leadership skills, communication skills and always dedicated to tasks.
					` // ###### Do not touch/change this line

	const projects = [
		{
			thumbnail: projectItem1,
			alt: "project",
			title: "Best Design",
			description: "1Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: projectItem2,
			alt: "project",
			title: "Creative Pen",
			description: "2Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: projectItem3,
			alt: "project",
			title: "Nice Capture",
			description: "3Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: projectItem1,
			alt: "project",
			title: "Best Design",
			description: "4Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: projectItem2,
			alt: "project",
			title: "Creative Pen",
			description: "5Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: projectItem3,
			alt: "project",
			title: "Nice Capture",
			description: "6Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: projectItem1,
			alt: "project",
			title: "Best Design",
			description: "7Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: projectItem2,
			alt: "project",
			title: "Creative Pen",
			description: "8Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: projectItem3,
			alt: "project",
			title: "Nice Capture",
			description: "9Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: projectItem3,
			alt: "project",
			title: "Nice Capture",
			description: "10Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: projectItem2,
			alt: "project",
			title: "Creative Pen",
			description: "11Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: projectItem3,
			alt: "project",
			title: "Nice Capture",
			description: "12Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: projectItem1,
			alt: "project",
			title: "Best Design",
			description: "13Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: projectItem2,
			alt: "project",
			title: "Creative Pen",
			description: "14Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: projectItem3,
			alt: "project",
			title: "Nice Capture",
			description: "15Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: projectItem3,
			alt: "project",
			title: "Nice Capture",
			description: "16Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: projectItem3,
			alt: "project",
			title: "Nice Capture",
			description: "17Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
	]

	return { name, email, occupation, company, skills, about1, about2, projects }
}
export {Entry}
