import React from "react";
import picture from "../img/contact.gif";
// import Map from "./Map";

function Tab2() {
	return (
		<div>
			<header style={styles.header}>
				<h1>Saturday, August 17th 2019</h1>
				<h1>@</h1>
				<h1>8:30PM</h1>
				<h1>Rock Box Seattle</h1>
				<a href="https://rockboxseattle.com/contact.html">
					<img src={picture} style={styles.map} alt="logo" />
				</a>
			</header>
			{/* <Map style={styles.map} /> */}
		</div>
	);
}

export default Tab2;

const styles = {
	header: {
		flex: 1,
		textAlign: "center",
		color: "#773d82"
	},
	map: {
		justifyContent: "center",
		alignItems: "center",
		width: 400,
		height: 300,
		marginLeft: -10
	}
};
