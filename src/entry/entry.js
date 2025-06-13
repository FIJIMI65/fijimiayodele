import { faChartLine, faMicrochip, faMagnifyingGlassChart, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const thumbnails = require.context('./projectThumbnails', false, /\.(png|jpe?g|svg)$/);
const getThumbnails = (name) => (thumbnails(`./${name}`))

function Entry () {
	const newLine = '\\n'
	const newLineWSpace = '\\n\\n'
	const fname = 'Fijimi'
	const lname = 'Ayodele'
	const name = `${fname}\n${lname}`

	const email = 'fijimiayodele@gmail.com'

	const skills = ['DATA SCIENTIST', 'DATA ANALYST', 'MACHINE LEARNING', 'AI']

	const tangline = `
					With cross-industry experience in e-commerce, energy, finance and healthcare domains,
					delivering end-to-end data solutions from data extraction to model deployment.
					`

	const specializations = [
		{
			title: 'Data Science',
			icon: faChartLine,
			color: '#FFD700',
			description: `
						My expertise in data science centers on transforming raw data into meaningful
						insights through rigorous feature engineering, statistical analysis, and data modeling.
						I have experience creating robust features from both structured and unstructured
						datasets—handling missing values, performing normalization, encoding categorical
						variables, and crafting domain-specific indicators to improve model performance.
						My work is grounded in solid statistical foundations, including hypothesis testing
						and regression analysis which I apply to validate assumptions and inform analytical
						strategies. Beyond data preparation, I have developed end-to-end pipelines that
						integrate exploratory data analysis, dimensionality reduction, and model tuning,
						enabling data-driven decision-making.
						`
		},
		{
			title: 'Data Analysis',
			icon: faMagnifyingGlassChart,
			color: '#2ca02c',
			description: `
						In the area of data analysis, I specialize in cleaning and transforming unstructured
						data, applying techniques such as encoding, normalization, and imputation to ensure data
						quality and model readiness. I conduct statistical testing, including t-tests, ANOVA,
						and regression analysis, to uncover relationships and validate business hypotheses. My
						business intelligence work involves developing interactive dashboards with Power BI,
						enabling dynamic KPI tracking and real-time reporting by integrating data from multiple
						sources such as Excel, SQL, and Microsoft Access.
						`
		},
		{
			title: 'Machine Learning',
			icon: faMicrochip,
			color: '#e15759',
			description: `
						My machine learning skill set includes building and fine-tuning supervised learning
						models for predictive tasks such as churn prediction, customer behavior analysis, credit
						card fraud detection, sales forecasting, and housing price estimation. I've also
						developed operational models to estimate delivery times and assess credit risk,
						directly contributing to improved logistics, marketing performance, and financial
						decision-making.
						`
		},
		{
			title: 'Deployment & MLOps',
			icon: faCloudUploadAlt,
			color: '#00FFFF',
			description: `
						On the deployment and operationalization side, I have co-deployed machine learning models
						using Streamlit integrated it with RESTful APIs, and managed hosting on cloud platforms
						like AWS and Azure. I regularly collaborate with software engineers and business teams
						to ensure that the models are scalable, robust, and aligned with organizational
						objectives, thereby bridging the gap between model development and real-world impact.
						`
		},
	]

	const aboutSectioned = `
					I am a results-driven Data Scientist and Machine Learning Engineer with 5+ years of
					experience leveraging data to drive strategic decisions and business growth. My background
					spans a range of industries including e-commerce, healthcare, energy, and finanace, where
					I have built and deployed data-driven solutions that improve performance, reduce risk, and
					`
	const aboutUnsectionedSummary = `
					increase efficiency. My expertise lies in applying machine learning, statistical modeling,
					and business intelligence tools to solve complex problems and uncover actionable insights.
					
					${newLineWSpace}During my time at 10alytics Data & Strategy, I implemented key projects that significantly
					impacted client outcomes. I developed predictive models for customer churn, marketing
					optimazation and purchase behavior that improved operational efficiency and boosted customer
					retention. A classification model I implemented increased marketing campaign conversion rates
					by 17%, while a risk scoring model for loan approvals reduced credit risk by 10%. I also
					created a real estate revenue forecasting solution that accurately projected monthly sales
					with over 94% accuracy, providing valuable insights for investment and planning.
					`.replace(/\n/g, ' ')
					.replace(/\s{2,}/g, ' ')
					.replace(/\\n/g, '\n');

	const aboutUnsectioned = `
					${aboutUnsectionedSummary.replace(/\n/g, '\\n')}
					
					${newLineWSpace}My technical toolkit includes Python, SQL, R, Power BI, Scikit-learn, XGBoost, TensorFlow,
					and cloud platforms such as AWS and AZURE. I've worked extensively on end-to-end data
					workflows—scraping and cleaning unstructured data, performing exploratory data analysis,
					engineering features, training models, and deploying them into production environments. I
					have also utilized NLP and computer vision techniques to automate tasks such as sentiment
					analysis and medical image classification, cutting manual review time by up to 18%.
					`.replace(/\n/g, ' ')
					.replace(/\s{2,}/g, ' ')
					.replace(/\\n/g, '\n');

	const projects = [
		{
			thumbnail: getThumbnails("sample1.png"),
			alt: "project",
			title: "Best Design",
			description: "1Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample2.png"),
			alt: "project",
			title: "Creative Pen",
			description: "2Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample3.png"),
			alt: "project",
			title: "Nice Capture",
			description: "3Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample4.png"),
			alt: "project",
			title: "Best Design",
			description: "4Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample5.png"),
			alt: "project",
			title: "Creative Pen",
			description: "5Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample6.png"),
			alt: "project",
			title: "Nice Capture",
			description: "6Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample7.png"),
			alt: "project",
			title: "Best Design",
			description: "7Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample8.png"),
			alt: "project",
			title: "Creative Pen",
			description: "8Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample9.png"),
			alt: "project",
			title: "Nice Capture",
			description: "9Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample10.png"),
			alt: "project",
			title: "Nice Capture",
			description: "10Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample11.png"),
			alt: "project",
			title: "Creative Pen",
			description: "11Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample1.png"),
			alt: "project",
			title: "Nice Capture",
			description: "12Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample2.png"),
			alt: "project",
			title: "Best Design",
			description: "13Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample3.png"),
			alt: "project",
			title: "Creative Pen",
			description: "14Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample4.png"),
			alt: "project",
			title: "Nice Capture",
			description: "15Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample5.png"),
			alt: "project",
			title: "Nice Capture",
			description: "16Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample6.png"),
			alt: "project",
			title: "Nice Capture",
			description: "17Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.",
			link: "#",
			buttonText: "More",
		},
	]

	return {
		name,
		email,
		skills,
		tangline,
		aboutSectioned,
		aboutUnsectionedSummary,
		aboutUnsectioned,
		specializations,
		projects
	}
}
export {Entry}
