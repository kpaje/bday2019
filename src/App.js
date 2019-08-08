import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Navbar";

function App() {
	return (
		<div className="App">
			<NavBar />
			<header className="App-header">
				<h1>You're invited!</h1>
				<img src={logo} className="App-logo" alt="logo" />
				<h1>Kelvin's 31st Birthday!</h1>
			</header>
			<div>
				<i class="fa fa-angle-double-down" />
			</div>
		</div>
	);
}

export default App;
