'use strict';
var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<nav>
				<div className="brand">
					<img className="logo" src="../../images/logo.png" />
					<span>Fresh Jobs</span>
				</div>
							
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<a className="navLinks lastLink" href="#">for employers</a>
					<a className="navLinks" href="#">why fresh?</a>
					<a className="navLinks" href="#">Cities</a>
					<a className="navLinks" href="#">companies</a>
					<a className="navLinks" href="#">jobs</a>
				</div>
			</nav>
			
				);
	}
});