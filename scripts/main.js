'use strict';
var React = require('react');

var AppComponent = require('./components/AppComponent.js');
var NavComponent = require('./components/NavComponent.js');
var mainContent = document.getElementById('main-content');


React.render(

	<AppComponent />,
	mainContent
);


