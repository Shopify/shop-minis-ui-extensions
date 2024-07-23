import {Box, Text, ScreenWidthContainer} from '@shopify/shop-minis-platform-sdk'
import {ScrollView} from 'react-native'

import {
  ProductsCarouselCard,
  ProductsCarouselProduct,
  ProductsCarouselProductVariant,
} from './components/ProductsCarouselCard'

export function BundleProductsCarousel({
  products,
  shopId,
  onProductAddedToBundle,
  onProductRemovedFromBundle,
  title = 'Bundle and Save',
  subtitle,
}: {
  products: ProductsCarouselProduct[]
  shopId: string
  onProductAddedToBundle: (
    product: ProductsCarouselProduct,
    variant: ProductsCarouselProductVariant
  ) => void
  onProductRemovedFromBundle: (
    product: ProductsCarouselProduct,
    variant: ProductsCarouselProductVariant
  ) => void
  title?: string
  subtitle?: string
}) {
  return (
    <Box marginTop="xs">
      <Text variant="bodyTitleLarge">{title}</Text>
      {subtitle ? (
        <Text variant="bodySmall" color="foregrounds-subdued">
          {subtitle}
        </Text>
      ) : null}
      <ScreenWidthContainer>
        <ScrollView horizontal>
          <Box flexDirection="row" gap="xs" marginLeft="gutter">
            {products.map(product => (
              <ProductsCarouselCard
                key={product.id}
                product={product}
                onProductAddedToBundle={onProductAddedToBundle}
                onProductRemovedFromBundle={onProductRemovedFromBundle}
                shopId={shopId}
              />
            ))}
          </Box>
        </ScrollView>
      </ScreenWidthContainer>
    </Box>
  )
}
