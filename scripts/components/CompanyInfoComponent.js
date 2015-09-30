var React = require('react');

module.exports = React.createClass({
    render: function() {
    	var style= {backgroundImage: 'url('+this.props.model.get('company_bgImg')+')'}
        return (
            <div className="companyInfo">
            	<div className="bgImg" style={style}>
            		<img className="companyLogo" src={this.props.model.get('company_logo')} />
            	</div>
            	<h2 className="companyName">{this.props.model.get('company_name')}</h2>
            	<div className="companyLocal">{this.props.model.get('company_location')}</div> 
            </div>
        );
    }
});