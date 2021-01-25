const path = require('path');
const IS_PROD = process.env.NODE_ENV !== 'development'

module.exports = {
	services: {
		front: {
			theme: 'global:' + path.join(process.cwd(), 'themes', 'damal2'),
			script: process.env.FRONT_SERVICE_SCRIPT || (IS_PROD ? 'npm start' : 'npm run build && npm run dev')
		}
	}
}
