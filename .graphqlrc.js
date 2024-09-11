const baseConfig = require('@shopify/shop-minis-runtime/graphqlrc')

// override base config to take into account that targets are located in packages/fixture-mini/src/targets
// and not in src/targets

const clonedConfig = structuredClone(baseConfig)
clonedConfig.projects.default.excludes = [
  '**/node_modules/**',
  'packages/fixture-mini/src/targets/**',
]

// Iterate over projects so we don't miss any new schemas
Object.keys(clonedConfig.projects).forEach(key => {
  if (key === 'default') return;

  clonedConfig.projects[key].includes =
    clonedConfig.projects[key].includes.map(path =>
      path.replace('src/targets/', 'packages/fixture-mini/src/targets/')
    )
})

module.exports = clonedConfig
