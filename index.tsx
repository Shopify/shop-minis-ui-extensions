import {renderDevelopmentMini} from '@shopify/shop-minis-runtime/src/utils/renderDevelopmentMini'

import MiniApp from './packages/fixture-mini/src'

renderDevelopmentMini(MiniApp, {
  enableApiSandbox: true,
})
