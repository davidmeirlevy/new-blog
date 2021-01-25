const path = require('path');
const IS_PROD = process.env.NODE_ENV !== 'development'

module.exports = {
	services: {
		front: {
			theme: 'global:' + path.join(process.cwd(), 'themes', 'damal2'),
		}
	}
}
