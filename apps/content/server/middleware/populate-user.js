const { editorsRoles, adminRole } = require('../../config')
const { populateUser } = require('@greenpress/api-kit/user-middlewares')

/**
 *  Populate user on request
 */
module.exports = (req, res, next) => {
  console.log('try to populate user');
	populateUser(req, res, () => {
		if (req.user) {
			const user = req.user
			user.isEditor = user.roles.some(role => editorsRoles.includes(role))
			user.isAdmin = user.roles.includes(adminRole)
		}
		next()
	})
}
