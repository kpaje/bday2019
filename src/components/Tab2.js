import React from "react";
import picture from "../img/contact.gif";
// import Map from "./Map";

function Tab2() {
	return (
		<div>
			<header style={styles.header}>
				<h1>Sturday, August 17th 2019</h1>
				<h1>@</h1>
				<h1>8:00PM</h1>
				<h1>Rock Box Seattle</h1>
			</header>
			<img src={picture} style={styles.map} alt="logo" />
			{/* <Map style={styles.map} /> */}
		</div>
	);
}

export default Tab2;

const styles = {
	header: {
		flex: 1,
		textAlign: "center"
	},
	map: {
		justifyContent: "center",
		alignItems: "center",
		width: 400,
		height: 300,
		marginLeft: -10
	}
};
