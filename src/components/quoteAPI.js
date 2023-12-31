const getRandomQuote = (quotes) => {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	const randomQuote = quotes[randomIndex][0];
	const author = quotes[randomIndex][1];
	return [randomQuote, author];
};

export default getRandomQuote;
