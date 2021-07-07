const { redisUrl } = require('../../config')

const cacheManager = require('cache-manager').caching({
  store: 'memory',
  url: redisUrl,
  ttl: 600,
})

module.exports = cacheManager
