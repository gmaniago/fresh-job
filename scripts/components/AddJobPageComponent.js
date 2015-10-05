var React = require('react');

module.exports = React.createClass({
	render: function() {
		return(
		<div className="AddJobPage">
			<form className="jobForm">
				<h1>Post Your Job</h1>
				<div className="form">
					<label>Title</label>
						<input type="text" />
				</div>
				<div className="form">
					<label>Company Name</label>
						<input type="text" />
				</div>
				<div className="form">
					<label>Location</label>
					<input type="text" />
				</div>
				<div className="form">
					<label>Description</label>
					<textarea />
				</div>
				<div className="form">
					<label>Tags</label>
					<input type="text" />
				</div>
				<button>Submit Job</button>
			</form>
			<div className="jobTips">
	            <h3 className="tipsHr">Tips for your job posting</h3>
	            <p><strong>Add Keywords </strong>because the majority of candidates search for available positions using keywords, make sure you use all relevant keywords in your posting.
	            </p>
	            <p><strong>Use Familiar Job Titles. </strong>Use specific but familiar job titles in your postings. Make sure the titles are clear and succint.
	            </p>
	            <p><strong>Give Them Details. </strong>The purpose of posting a job is to sparl a candidates interest in the available position. When job postings have detailed descriptions, candidates tend to apply to them more.
	            </p>
	            <p><strong>Expand Your Location </strong>Do not limit your job posting to a restricted area the jobs location. Make sure to include surrounding cities and metropolitan areas in your searches.
	            </p>
	            <p><strong>Discuss Compensation </strong>Even though you may not want to give an exact compensation, give a range. Make sure to point out any bonuses, commissions, or non-monetary compensation, as well.
	            </p>
	        </div>
	    </div>

		);

	},
	onFormSubmitted: function(e) {
		e.preventDefault();
		var newJob = this.props.jobs.add({
			title: this.refs.title.getDOMNode().value,
			description: this.refs.description.getDOMNode().value,
			location: this.refs.location.getDOMNode().value,
			company: this.refs.company.getDOMNode().value,
		});
		this.props.router.navigate('details/'+newJob.cid, {trigger: true});
	}

})











