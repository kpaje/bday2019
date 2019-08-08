import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default function CenteredTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	function handleChange(event, newValue) {
		setValue(newValue);
	}

	return (
		<Tabs
			value={value}
			onChange={handleChange}
			indicatorColor="primary"
			textColor="secondary"
			centered
			fullWidth={true}
		>
			<Tab label="Where" />
			<Tab label="When" />
			<Tab label="Directions" />
		</Tabs>
	);
}

const useStyles = makeStyles({
	root: {
		flexGrow: 1
	}
});
