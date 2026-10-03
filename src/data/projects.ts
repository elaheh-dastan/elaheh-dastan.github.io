// Open-source projects. Mirrors the resume's Projects section
// (elaheh-dastan.pdf: src/shared/projects.typ).

export interface Project {
	title: string;
	tagline: string;
	repo: string;
	year: string;
	description: string;
	tags: string[];
}

export const projects: Project[] = [
	{
		title: "QueryCraft",
		tagline: "Agentic Text-to-SQL",
		repo: "elaheh-dastan/QueryCraft",
		year: "2026",
		description:
			"A LangGraph + LangChain agent that converts natural-language questions into SQL, executes them, and returns results. Served as a Django web app with a self-hosted sqlcoder-7b LLM via Ollama and PostgreSQL, containerized with Docker Compose.",
		tags: ["LangGraph", "LangChain", "Ollama", "Django"],
	},
	{
		title: "Flight Booking Agent",
		tagline: "Conversational Tool-Using Agent",
		repo: "elaheh-dastan/book-flight-llm",
		year: "2026",
		description:
			"A conversational GPT-4.1 agent that books flights end-to-end via function/tool calling: collecting passenger details, searching flights, and confirming bookings against a live API.",
		tags: ["Tool Calling", "GPT-4.1", "Agents"],
	},
	{
		title: "Multi-Agent App",
		tagline: "Agents, Handoffs & Guardrails with the OpenAI Agents SDK",
		repo: "elaheh-dastan/openai-agent",
		year: "2026",
		description:
			"An agentic application built with the OpenAI Agents SDK using agent handoffs, input/output guardrails, sessions, and built-in tracing, routed across multiple model providers (OpenAI, Anthropic, Google, Llama) through OpenRouter.",
		tags: ["Agents SDK", "Guardrails", "OpenRouter"],
	},
	{
		title: "Seller Description Validator",
		tagline: "LLM-as-Judge + Vector Search",
		repo: "elaheh-dastan/SellerDescriptionValidator",
		year: "2026",
		description:
			"A FastAPI service that uses an LLM (Gemini 2.0 Flash via OpenRouter) to evaluate seller product statements and return a calibrated confidence level, with all-MiniLM-L6-v2 embeddings stored in a Qdrant vector database.",
		tags: ["FastAPI", "Qdrant", "LLM-as-Judge"],
	},
];
