const { redisUrl } = require('../../config')

console.log('use cache from redis: ', !!redisUrl)
console.log('redis store library:', require('cache-manager-redis'))

const cacheManager = require('cache-manager').caching({
  store: redisUrl ? require('cache-manager-redis') : 'memory',
  url: redisUrl,
  ttl: 600,
})

module.exports = cacheManager
