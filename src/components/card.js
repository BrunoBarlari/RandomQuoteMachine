import React from "react";
import "../Card.css";
import getRandomQuote from "./quoteAPI";
import quotes from "./quotes";

class Card extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			quote: getRandomQuote(quotes),
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			quote: getRandomQuote(quotes),
		});
	}

	render() {
		return (
			<div id="card">
				<div id="quote-box">
					<div id="text">{this.state.quote[0]}</div>
					<div id="author">{this.state.quote[1]}</div>
					<button onClick={this.handleClick} id="new-quote">
						New Quote
					</button>
					<button id="twitter-button">
						<a id="tweet-quote" href="twitter.com/intent/tweet">Twitter</a>
					
					</button>
				</div>
			</div>
		);
	}
}

export default Card;
