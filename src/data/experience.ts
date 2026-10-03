// Work history. Mirrors the resume (elaheh-dastan.pdf: src/shared/professional.typ)
// as a curated subset: every employer, title and date range must match it
// exactly, but not every resume bullet needs to appear here.

export interface Role {
	title: string;
	date: string;
	bullets: string[];
	tags: string[];
}

export interface Employer {
	name: string;
	/** One line explaining who the employer is, for readers outside Iran. */
	descriptor?: string;
	location: string;
	roles: Role[];
}

export const experience: Employer[] = [
	{
		name: "Caterpillar",
		descriptor: "via COMTEK International",
		location: "Barcelona, Spain · Remote",
		roles: [
			{
				title: "Machine Learning Engineer",
				date: "May 2026 – Present",
				bullets: [
					"Build and own Pampas, the LLM evaluation framework that assesses AI assistant outputs across cloud and in-cab environments for the Cat In-Cab Assistant, covering the judging methodology, the test corpus, and the release pipeline that gates every change.",
					"Designed the judging methodology: binary Accept/Reject rubrics, a generic RAG metric evaluator, a deterministic tool-calling evaluator, and a parts-search judge for SIS2 driven from declarative scenario files.",
					"Built judge-the-judge meta-evaluation reporting variance and cross-judge agreement, so a rubric or prompt change is measured before it is trusted.",
					"Moved test data and configuration to code: dataset items migrated from JSON to YAML behind a conversion CLI, with Pydantic validation and scenario-schema to prompt-template wiring.",
					"Engineered the evaluation CI/CD: burn-in workflows, Bayesian two-branch comparison, chunked parallel matrices with result merging and PR-comment reporting, AWS Lambda deploys, and JFrog Artifactory publishing.",
					"Extracted the framework into a shared evaluation library with typed scenario contracts, LangGraph middleware, Langfuse tagging, and per-run timing reports.",
				],
				tags: [
					"Python",
					"LLM Evaluation",
					"LLM-as-Judge",
					"LangGraph",
					"Langfuse",
					"AWS Lambda",
					"CI/CD",
				],
			},
		],
	},
	{
		name: "Digikala",
		descriptor: "Iran's largest e-commerce marketplace",
		location: "Tehran, Iran",
		roles: [
			{
				title: "Senior Data Scientist",
				date: "Sep 2024 – May 2026",
				bullets: [
					"Built an image-to-product retrieval system with a dual-encoder model combining CLIP-based visual embeddings and textual product representations, reaching 92% top-10 accuracy and enabling visual search from uploaded or shared images.",
					"Trained a Query Understanding model on user query logs and click data to infer intent and reformulate low-confidence queries, reducing zero-click searches by 4%.",
					"Improved search relevance through multi-metric fine-tuning and category-consistent retrieval, lifting conversion rate by 4%; ran A/B experiments routing each query between semantic and Elasticsearch pipelines, increasing add-to-cart by 3%.",
					"Led the Exact Match project for precise product-code recognition via tokenizer modifications, custom masking, and a Redis-based code index, reducing seller complaints by 20%.",
					"Extended image search to video input with an FFmpeg transcoding, keyframe extraction and scene detection pipeline, improving retrieval relevance by 15%.",
					"Built an agentic LLM quality-control and ticket-resolution system with Pydantic AI and LangChain, using an LLM-as-judge harness and Langfuse tracing to score and autonomously answer support tickets.",
					"Established LLMOps practices, including prompt evaluation harnesses, Langfuse observability, and token-cost dashboards in Grafana, cutting LLM inference costs by 25%.",
				],
				tags: [
					"Python",
					"PyTorch",
					"LLM",
					"Pydantic AI",
					"LangChain",
					"RAG",
					"Elasticsearch",
					"A/B Testing",
				],
			},
		],
	},
	{
		name: "Asan Pardakht",
		descriptor: "Iranian payment services provider",
		location: "Tehran, Iran",
		roles: [
			{
				title: "Machine Learning Consultant",
				date: "Jul 2024 – Sep 2024",
				bullets: [
					"Built LSTM and Prophet price-forecasting models achieving 12–18% MAPE across major coins such as BTC and ETH.",
					"Developed a recommendation system with LightGBM and behavioral KMeans user clustering, increasing simulated ROI by 9.3%.",
					"Designed portfolio optimization combining Modern Portfolio Theory and Deep Q-Learning to maximize Sharpe ratio across 20+ cryptocurrencies.",
					"Integrated Monte Carlo simulations for profit expectation; the prototype outperformed an equal-weighted baseline by 15% in backtesting.",
				],
				tags: ["LightGBM", "Prophet", "Time Series", "Deep RL", "Backtesting"],
			},
		],
	},
	{
		name: "Snapp!",
		descriptor: "Iran's largest ride-hailing platform, 50M+ users",
		location: "Tehran, Iran",
		roles: [
			{
				title: "Senior ML Engineer",
				date: "2021 – 2024",
				bullets: [
					"Co-built an end-to-end MLOps pipeline to train, version, and deploy models using Airflow, Spark, MLflow, Katib, Feast, TensorFlow Serving, FastAPI, Kafka Streams and GitLab CI/CD, reducing training and deployment time by 70%.",
					"Built a recommendation system to infer speed for streets lacking sufficient data, expanding coverage from 1M to 3M shared streets.",
					"Launched an ETA system across 5+ cities in Iran and Iraq, improving R² by 20%, and reduced ETA MAPE by 5% with street-speed forecasting models.",
					"Implemented an HMM map-matching algorithm to align driver GPS probes to streets and compute per-driver speed.",
					"Developed a Golang microservice to benchmark model accuracy in real time with Prometheus and Grafana, speeding up QA by 80%.",
					"Owned a project to recommend optimal pickup locations for drivers and passengers, reducing offer-to-accept time by 5%.",
				],
				tags: ["MLflow", "Airflow", "Spark", "Feast", "Golang", "Prometheus"],
			},
			{
				title: "Software Engineer, AI/ML",
				date: "2020 – 2021",
				bullets: [
					"Integrated vector database solutions for efficient similarity search to surface related items in Snapp Shop, increasing conversion rate by 5%.",
					"Fine-tuned and deployed a pre-trained OCR model (EasyOCR) to read ID cards in the driver-signup flow, cutting signup time from days to hours.",
					"Optimized a transformer model with ONNX to boost inference speed by 10% and decouple training from serving.",
					"Engineered a sentiment analysis service using SVM to analyze over 10,000 tweets daily for real-time insight into public sentiment.",
					"Mentored over 5 new joiners and launched a structured mentorship program and a new interview pipeline.",
				],
				tags: ["Vector Search", "OCR", "ONNX", "SVM", "Mentoring"],
			},
		],
	},
	{
		name: "Dotin",
		location: "Tehran, Iran",
		roles: [
			{
				title: "Software Engineer",
				date: "Apr 2020 – Aug 2020",
				bullets: [
					"Designed transactional databases for critical financial operations, tuning them for query-processing efficiency and reliability.",
				],
				tags: ["Transactional Databases", "Query Optimization", "Fintech"],
			},
		],
	},
	{
		name: "Nahal",
		location: "Tehran, Iran",
		roles: [
			{
				title: "ML Engineer",
				date: "2018 – 2020",
				bullets: [
					"Fine-tuned and deployed LLM models on GPU to translate text between the support team and foreign customers.",
					"Developed a CRF-based NER model powering an address search engine, increasing successful searches by 15%.",
					"Built and deployed a stacked LSTM model to forecast stock and cryptocurrency values, achieving 87% prediction accuracy.",
					"Designed a type-ahead search system for stock lookup using prefix matching over a custom trie, reducing stock search time by 30%.",
					"Developed a BERT-based chatbot to answer stock inquiries, driving a 20% increase in user engagement.",
				],
				tags: ["LLM", "NER", "CRF", "LSTM", "BERT"],
			},
		],
	},
	{
		name: "Avidnet Technologies",
		location: "Tehran, Iran",
		roles: [
			{
				title: "Machine Learning Engineer",
				date: "2017 – 2018",
				bullets: [
					"Deployed neural-network time-series forecasting on Raspberry Pi 4 and decision-tree classification on ARM Cortex-M52.",
					"Led the design and implementation of an event detection service to alert on a patient's abnormal behavior, achieving a 0.95 F1 score.",
					"Employed TensorFlow Lite to reduce memory usage by 50%, enabling on-device inference on mobile phones.",
					"Launched a Kafka pipeline to ingest sensor data via Protobuf into a data lake, capable of handling 20k+ messages per second.",
					"Implemented Kalman filtering to enhance GPS positioning by 10%.",
				],
				tags: [
					"TinyML",
					"TensorFlow Lite",
					"Kafka",
					"Embedded",
					"Kalman Filter",
				],
			},
		],
	},
];
