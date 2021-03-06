import React, { Component } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";

class App extends Component {
	state = {
		index: 0
	};

	handleChange = (event, value) => {
		this.setState({
			index: value
		});
	};

	handleChangeIndex = index => {
		this.setState({
			index
		});
	};

	render() {
		const { index } = this.state;

		return (
			<div>
				<Tabs
					value={index}
					centered
					onChange={this.handleChange}
					style={styles.tabs}
				>
					<Tab label="WHAT" />
					<Tab label="WHEN" />
					{/* <Tab label="RSVP" /> */}
				</Tabs>
				<SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
					<div style={Object.assign({}, styles.slide, styles.slide1)}>
						<Tab1 />
					</div>
					<div style={Object.assign({}, styles.slide, styles.slide2)}>
						<Tab2 />
					</div>
					<div style={Object.assign({}, styles.slide, styles.slide3)}>RSVP</div>
				</SwipeableViews>
			</div>
		);
	}
}

export default App;

const styles = {
	tabs: {
		background: "#6bd7c4",
		color: "#773d82"
	},
	slide: {
		padding: 15,
		height: "100%",
		color: "#000000"
	},
	slide1: {
		backgroundColor: "#773d82"
	},
	slide2: {
		backgroundColor: "#b7b7b9"
	},
	slide3: {
		backgroundColor: "#6AC0FF"
	}
};
