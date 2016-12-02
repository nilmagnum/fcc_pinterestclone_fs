import React from 'react';

export default class NotAuthenticated extends React.Component {
	static contextTypes = {
		appState: React.PropTypes.func
	};
	render() {
		if (this.context.appState('authenticated')) {
			return <div />;
		} else {
			return (
				<div>
					{ this.props.children }
				</div>
			);
		}
	}
}
