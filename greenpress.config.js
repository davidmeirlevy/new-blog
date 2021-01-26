const path = require('path');

module.exports = {
	services: {
		front: {
			theme: 'global:' + path.join(__dirname, 'themes', 'damal2'),
		}
	}
}
