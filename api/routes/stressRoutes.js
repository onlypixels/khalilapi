'use strict';

module.exports = function(app) {
	var stress = require('../controllers/stressController');

	// todoList Routes
	app.route('/stress')
		.get(stress.get_stress_level)
		.post(stress.reset_stress_level)

	
};
