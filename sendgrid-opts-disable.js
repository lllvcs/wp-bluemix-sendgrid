jQuery(function() {
	var form_ele = jQuery('form[name="sendgrid_form"]')
	jQuery("<p><em>Credentials automatically retrieved from Bluemix.</em></p>").insertBefore(form_ele);
	
	// We can't disable these and still send the data when the form is submitted.
	
	// jQuery('input[name=sendgrid_user]').attr('disabled', 'disabled');
	// jQuery('input[name=sendgrid_pwd]').attr('disabled', 'disabled');
	// jQuery('select[name=sendgrid_api]').attr('disabled', 'disabled');
});
