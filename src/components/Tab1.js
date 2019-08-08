import React from "react";
import App from "../App.css";
import logo from "../img/kp.png";

function Tab1() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>You're invited!</h1>
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					<h1>to</h1>
				</p>
				<h1>Kelvin's 31st Birthday!</h1>
			</header>
		</div>
	);
}

export default Tab1;
