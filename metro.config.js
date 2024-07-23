const {
  getMinisMetroConfig,
} = require('@shopify/shop-minis-runtime/metro-config')

/**
 * @returns {import('metro-config').ConfigT}
 */
module.exports = getMinisMetroConfig(__dirname)
