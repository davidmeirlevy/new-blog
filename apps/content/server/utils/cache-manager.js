//const { redisUrl } = require('../../config')
const redisUrl = "redis://redistogo:2ddc059ac0e8e450bd04dc6cf5eff157@pike.redistogo.com:11132/";

const { createCacheManager } = require('@greenpress/cache-manager');

const cacher = redisUrl ?
  require('@greenpress/cache-manager/dist/redis-cache').createRedisCache(redisUrl) :
  require('@greenpress/cache-manager/dist/memory-cache').createMemoryCache()

const cacheManager = createCacheManager(cacher);

module.exports = cacheManager;
