import {BundleProductsQuantityCarousel} from '@shopify/shop-minis-ui-extensions'
import {
  FIXTURE_PRODUCTS,
  FIXTURE_SHOP_GID,
} from '@shopify/shop-minis-ui-extensions/src/extensions/bundle-products-carousel/seed'

import {PPQueryQueryData} from './input.graphql'

export function RenderPPExtension({
  extensionData: _extensionData,
}: {
  extensionData: PPQueryQueryData
}) {
  return (
    <BundleProductsQuantityCarousel
      products={FIXTURE_PRODUCTS}
      shopId={FIXTURE_SHOP_GID}
      subtitle="Save up to 30% buying these together"
      onProductVariantUpdated={(variant, quantity) => {
        console.log(
          'onProductVariantUpdated',
          variant.selectedOptions,
          quantity
        )
      }}
      maxQuantity={1}
    />
  )
}
