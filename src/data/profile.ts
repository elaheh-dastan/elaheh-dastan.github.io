// Identity and contact facts shared by every page. These mirror the resume's
// profile metadata (elaheh-dastan.pdf: src/profile_spain/metadata.toml) and
// must stay in sync with it.
export const profile = {
	name: "Elaheh Dastan",
	headline: "Senior Machine Learning Engineer",
	tagline:
		"I design and ship machine learning systems end to end: data pipelines, retrieval and recommendation models, and the evaluation frameworks that gate LLM agents into production.",
	years: "9+",
	location: "Barcelona, Spain",
	email: "elahe.dstn@gmail.com",
	phone: "+34 661 96 94 96",
	phoneHref: "tel:+34661969496",
	site: "https://elaheh-dastan.github.io",
	github: "https://github.com/elaheh-dastan",
	githubKeys: "https://github.com/elaheh-dastan.keys",
	linkedin: "https://www.linkedin.com/in/elaheh-dastan/",
	scholar: "https://scholar.google.com/citations?user=1BxI0JkAAAAJ",
	medium: "https://elahe-dstn.medium.com",
	instagram: "https://www.instagram.com/elahe.dstn",
	resumeRepo: "elaheh-dastan/elaheh-dastan.pdf",
} as const;

// Resume summary (src/shared/summary.typ), split into paragraphs for the web.
export const summary = [
	"I am a senior ML engineer with 9+ years of experience designing and deploying scalable machine learning systems and data pipelines. I build end-to-end solutions, from data collection and ETL to model training and production deployment, and I have delivered data-driven products with measurable business impact across e-commerce, fintech, transportation, and industrial AI.",
	"My current work centres on LLM and agent systems: retrieval, agentic pipelines, and the evaluation frameworks that gate them into production. At Caterpillar, through COMTEK International, I build the LLM evaluation framework behind the Cat In-Cab Assistant. Before that I built search and retrieval systems at Digikala, forecasting and portfolio models at Asan Pardakht, and ETA and traffic prediction at Snapp!.",
	"I hold a B.Sc. in Computer Engineering and an M.Sc. in Artificial Intelligence from Amirkabir University of Technology, with published research in intelligent transportation systems. I bring a strong foundation in both software engineering and data science to every system I own.",
];

export const interests = [
	"LLMs & Agentic AI",
	"LLM Evaluation & LLMOps",
	"Retrieval & Recommendation",
	"Time Series Forecasting",
	"MLOps",
	"Intelligent Transportation",
];

// Curated from the resume's skills section (src/shared/skills.typ).
export const skills: { group: string; items: string[] }[] = [
	{ group: "Languages", items: ["Python", "Go", "Rust", "Java", "C"] },
	{
		group: "ML & DL",
		items: [
			"PyTorch",
			"TensorFlow",
			"HuggingFace",
			"Scikit-learn",
			"XGBoost",
			"LightGBM",
		],
	},
	{
		group: "LLM & Agents",
		items: [
			"Pydantic AI",
			"LangChain",
			"LangGraph",
			"Langfuse",
			"RAG",
			"LLM-as-Judge",
		],
	},
	{
		group: "Retrieval",
		items: ["Elasticsearch", "Qdrant", "Vector Search", "CLIP", "BERT"],
	},
	{
		group: "ML Infra",
		items: ["MLflow", "Airflow", "Kubeflow", "Feast", "Katib", "Beam"],
	},
	{
		group: "Data",
		items: [
			"Spark",
			"Pandas",
			"NumPy",
			"PostgreSQL",
			"MongoDB",
			"Cassandra",
			"Redis",
		],
	},
	{ group: "Messaging", items: ["Kafka", "NATS", "RabbitMQ", "EMQ"] },
	{
		group: "Cloud & Ops",
		items: [
			"Docker",
			"Kubernetes",
			"Terraform",
			"AWS",
			"GCP",
			"Azure",
			"Prometheus",
			"Grafana",
		],
	},
];

export const languages = [
	{ name: "English", level: "Fluent" },
	{ name: "Persian", level: "Native" },
];
