import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
	render() {
		return (
			<Map
				google={this.props.google}
				zoom={19}
				style={mapStyles}
				initialCenter={{
					lat: 47.61537517482436,
					lng: -122.3200603126877
				}}
			/>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: "API_KEY"
})(MapContainer);

const mapStyles = {
	width: 300,
	height: 300
};
