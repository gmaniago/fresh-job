'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		id: 0,
		keyword_name: ''

	},
	idAttribute: 'id'
});