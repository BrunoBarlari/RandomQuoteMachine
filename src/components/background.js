import React from "react";
import "../Background.css";
import Card from "./card";

class Background extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			back_color: "",
		};
	}
    

	render() {
		return (
			<div id="background-container">
				<Card />
			</div>
		);
	}
}

export default Background;
