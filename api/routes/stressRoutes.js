'use strict';

module.exports = function(app) {
	var stress = require('../controllers/stressController');

	app.route('/stress')
		.get(stress.get_stress_level)
		.post(stress.reset_stress_level);

	var passports = require('../controllers/passportController');

	app.route('/passport')
		.get(passports.get_passports)
		.post(passports.reset_passports);
	
};