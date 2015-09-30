'use strict'

var React = require('react');
var JobPositionModel = require('../models/JobPositionModel.js');
var JobInfoComponent = require('./JobInfoComponent.js')
var CompanyInfoModel = require('../models/CompanyInfoModel.js');
var CompanyInfoComponent = require('./CompanyInfoComponent.js');


var JobPosition1 = new JobPositionModel({
	employer: 'SolarCity', 
	job_title: 'Junior Developer', 
	location: 'Las Vegas',
	job_description: 'Support lead developers in everything they do. Must know how to make coffee.',
	job_tags: ['javascript ', 'coffee making ', 'html ', 'css ']
})

var CompanyInfo1 = new CompanyInfoModel({
	company_name: 'SolarCity',
	company_location: 'San Francisco',
	company_logo: 'http://www.solarcity.com/sites/default/files/210x55-solarcity-logo.png',
	company_bgImg: 'https://www.aee.net/assets/members/solar-city_logo2-29b14a315527e1e8b38257aca72b6143.png',
	company_size: 1000

})


module.exports = React.createClass({

    render: function() {
        return (
            <div>
            <JobInfoComponent model={JobPosition1} />
            <CompanyInfoComponent model={CompanyInfo1} />
            </div>
        );
    }
});