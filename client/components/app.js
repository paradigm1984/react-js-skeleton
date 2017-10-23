// packages
import React, {Component} from "react";

// internal files
import Header from "./header";
import Body from "./body";
import Footer from "./footer";

class App extends React.Component {

	render() {
		return (
			<div className= "App">
				<Header />
				<Body />
				<Footer />
			</div>
		)
	}
}

export default App;
