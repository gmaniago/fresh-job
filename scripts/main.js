'use strict';

var Backbone = require('backbone');
var React = require('react');

var AppComponent = require('./components/AppComponent.js');
var NavComponent = require('./components/NavComponent.js');
var JobsTemplateComponent = require('./components/JobsTemplateComponents.js');

var mainContent = document.getElementById('main-content');
var mainNav = document.getElementById('main-nav');

var Router =Backbone.Router.extend({
	routes : {
	'jobs': 'jobsPage',
	'employers': 'employersPage'
	},
	employersPage: function(){
		React.render(
		<AppComponent />,
		mainContent
		)
	},
	jobsPage: function(){
		React.render(
		<JobsTemplateComponent />,
		mainContent
		)
	}
});



React.render(

	<AppComponent />,
	mainContent
	mainNav
);

var app = new Router();
Backbone.history.start();
