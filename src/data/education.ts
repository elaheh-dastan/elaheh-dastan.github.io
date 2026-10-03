// Degrees and publications. Mirrors the resume (elaheh-dastan.pdf:
// src/shared/education.typ and src/shared/publications.typ).

export const university = {
	name: "Amirkabir University of Technology",
	url: "https://aut.ac.ir/",
	location: "Tehran, Iran",
};

export const degrees = [
	{
		title: "M.Sc. in Artificial Intelligence",
		date: "2022 – 2024",
		detailLabel: "Research focus",
		detail:
			"Deep Learning, Time Series Analysis, Intelligent Transportation Systems",
	},
	{
		title: "B.Sc. in Computer Engineering",
		date: "2017 – 2022",
		detailLabel: "Relevant coursework",
		detail:
			"Machine Learning, Data Structures, Algorithms, Database Systems, Statistics",
	},
];

export const publications = [
	{
		title:
			"Clustering of Urban Traffic Patterns by K-Means and Dynamic Time Warping",
		role: "Co-author",
		venue: "arXiv preprint",
		year: "2023",
		url: "https://arxiv.org/abs/2309.09830",
		id: "arXiv:2309.09830",
		summary:
			"A study clustering urban traffic patterns with K-Means and Dynamic Time Warping to characterise how traffic behaves across a city.",
	},
];
