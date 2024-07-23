import {MiniAppConfig} from '@shopify/shop-minis-platform-sdk'

import {App} from './App'
import {RenderPPExtension} from './targets/shop.product.variants.render-before/render'

const config: MiniAppConfig = {
  ViewerRoot: App,
  Targets: {
    'shop.product.variants.render-before': RenderPPExtension,
  },
}

export default config
