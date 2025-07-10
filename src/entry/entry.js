import { faChartLine, faMicrochip, faMagnifyingGlassChart, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const thumbnails = require.context('./projectThumbnails', false, /\.(png|jpe?g|svg)$/);
const getThumbnails = (name) => (thumbnails(`./${name}`))

function Entry () {
	// const newLine = '\\n'
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
			thumbnail: getThumbnails("Marketing Campaign Analysis.png"),
			alt: "Marketing Campaign Analysis",
			title: "Marketing Campaign Analysis",
			description: `
							This project predicts customer responses to a bank's marketing campaign using
							machine learning. By identifying key customer characteristics and behaviors,
							the model helps improve targeting strategies, marketing efficiency, and
							overall campaign ROI.
						`,
			link: "https://github.com/FIJIMI65/Machine_Learning_marketing_campaign_Analysis",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("Linear Optimization Server Procurement for Intranet Deployment.png"),
			alt: "Linear Optimization: Server Procurement for Intranet Deployment",
			title: "Linear Optimization",
			description: `
							This project addresses a real-world integer programming problem involving phased
							server procurement for a company-wide intranet rollout at CommuniCorp. The
							challenge involves meeting growing departmental demand while minimizing costs
							under budget and capacity constraints.
						`,
			link: "https://github.com/FIJIMI65/linear_optimization_Project",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("Loan Approval Prediction using Machine Learning.png"),
			alt: "Loan Approval Prediction using Machine Learning",
			title: "Loan Approval Prediction",
			description: `
							This project is a data science initiative to develop a predictive model that
							determines the likelihood of loan approval based on applicant demographics,
							financial attributes, and loan-specific features. It aims to assist microfinance
							institutions in making smarter, data-driven lending decisions, improving approval
							accuracy, reducing default risk, and promoting financial inclusion.
						`,
			link: "https://github.com/FIJIMI65/Machine-Learning-Loan-Approval",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample3.png"),
			alt: "project",
			title: "Nice Capture",
			description: `
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
						`,
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample4.png"),
			alt: "project",
			title: "Best Design",
			description: `
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
						`,
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample5.png"),
			alt: "project",
			title: "Creative Pen",
			description: `
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
						`,
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample6.png"),
			alt: "project",
			title: "Nice Capture",
			description: `
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
						`,
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample7.png"),
			alt: "project",
			title: "Best Design",
			description: `
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
						`,
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample8.png"),
			alt: "project",
			title: "Creative Pen",
			description: `
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
						`,
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample9.png"),
			alt: "project",
			title: "Nice Capture",
			description: `
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
						`,
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample10.png"),
			alt: "project",
			title: "Nice Capture",
			description: `
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
						`,
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample11.png"),
			alt: "project",
			title: "Creative Pen",
			description: `
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
						`,
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample1.png"),
			alt: "project",
			title: "Nice Capture",
			description: `
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
						`,
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample2.png"),
			alt: "project",
			title: "Best Design",
			description: `
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
						`,
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample3.png"),
			alt: "project",
			title: "Creative Pen",
			description: `
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
						`,
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample4.png"),
			alt: "project",
			title: "Nice Capture",
			description: `
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
						`,
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample5.png"),
			alt: "project",
			title: "Nice Capture",
			description: `
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
						`,
			link: "#",
			buttonText: "More",
		},
		{
			thumbnail: getThumbnails("sample6.png"),
			alt: "project",
			title: "Nice Capture",
			description: `
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia curae; Sed sollicitudin, libero non egestas
							fermentum, nisi nulla malesuada lacus, vitae commodo sapien velit nec justo.
						`,
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
