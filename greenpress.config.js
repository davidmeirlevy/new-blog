const path = require('path');

module.exports = {
	services: {
		front: {
			theme: 'global:' + path.join(process.cwd(), 'themes', 'damal2')
		}
	}
}
