import React, { Component } from 'react';
class ConditionalHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEnabled: true,
			header: null,
			buttonText: 'Show Header'
		};
		this.toggle = this.toggle.bind(this);
	}
	render() {
		return(
			<div id="main">
				<button type="button" onClick={this.toggle}>
					{this.state.buttonText}
				</button>
				{this.state.header}
			</div>
		);
	}
	toggle(event) {
		if (!this.state.isEnabled) {
			this.setState({
				isEnabled: true,
				header: (<h1>Download successful!</h1>),
				buttonText: 'Click to Update App'
			});
		} else {
			this.setState({
				isEnabled: false,
				header: null,
				buttonText: 'Download App Here'
			});
		}
	}
}

export default ConditionalHeader;