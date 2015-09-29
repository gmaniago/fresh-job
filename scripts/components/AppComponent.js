'use strict';

var React = require('react');
var NavComponent  = require('./NavComponent');
var JobTipsComponent = require('./JobTipsComponent');
var JobFormComponent = require('./JobFormComponent');

module.exports = React.createClass ({
	render: function() {
		return (
			<div>
				<NavComponent />
				<JobFormComponent />
				<JobTipsComponent />
			</div>
			);
	}

});