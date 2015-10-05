'use strict';

var React = require('react');
var NavComponent  = require('./NavComponent');
var AddJobPageComponent = require('./AddJobPageComponent');

module.exports = React.createClass ({
	render: function() {
		return (
			<div>
				<NavComponent />
				<AddJobPageComponent />
			</div>
			);
	}

});