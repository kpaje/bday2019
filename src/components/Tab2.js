import React from "react";
import picture from "../img/contact.gif";
import Map from "./Map";

function Tab2() {
	return (
		<div>
			<header style={styles.header}>
				<h1>August 17th 2019</h1>
				<h1>Rock Box Seattle</h1>
				<Map />
			</header>
			{/* <img src={picture} alt="logo" /> */}
		</div>
	);
}

export default Tab2;

const styles = {
	header: {
		flex: 1,
		textAlign: "center"
	}
};
