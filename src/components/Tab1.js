import React from "react";
// eslint-disable-next-line
import App from "../App.css";
import logo from "../img/kp.png";

function Tab1() {
	return (
		<div className="App">
			<header style={styles.header} className="App-header">
				<h1>You're invited!</h1>
				<img src={logo} className="App-logo" alt="logo" />
				<h1>to</h1>
				<h1>Kelvin's 31st Birthday!</h1>
			</header>
		</div>
	);
}

export default Tab1;

const styles = {
	color: "#6bd7c4"
};
