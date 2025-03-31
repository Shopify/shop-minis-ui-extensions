import {
  BundleProductsQuantityCarousel,
  MarketingCard,
} from '@shopify/shop-minis-ui-extensions'
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
    // <BundleProductsQuantityCarousel
    //   products={FIXTURE_PRODUCTS}
    //   shopId={FIXTURE_SHOP_GID}
    //   subtitle="Save up to 30% buying these together"
    //   onProductVariantUpdated={(variant, quantity, index) => {
    //     console.log(
    //       'onProductVariantUpdated',
    //       variant.selectedOptions,
    //       quantity,
    //       index
    //     )
    //   }}
    //   maxQuantity={1}
    // />
    <MarketingCard
      iconName="arrow-right"
      image={{
        url: 'https://cdn.shopify.com/s/files/1/0621/0463/3599/files/preview_images/197d24d529fd4d5685d88b8e7a0e99b3.thumbnail.0000000000.jpg',
      }}
      actionText="Action Text"
    />
  )
}
