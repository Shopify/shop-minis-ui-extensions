import {
  Box,
  Text,
  ScreenWidthContainer,
  ExtensionProviders,
} from '@shopify/shop-minis-platform-sdk'
import {ScrollView} from 'react-native'
import {PropsWithChildren} from 'react'

import {
  ProductsCarouselCard,
  ProductsCarouselProduct,
  ProductsCarouselProductVariant,
} from './components/ProductsCarouselCard'

export function BundleProductsQuantityCarousel({
  products,
  shopId,
  subtitle,
  onProductVariantUpdated,
  title = 'Bundle and Save',
  maxQuantity,
}: {
  products: ProductsCarouselProduct[]
  shopId: string
  onProductVariantUpdated: (
    variant: ProductsCarouselProductVariant,
    quantity: number,
    index: number
  ) => void
  title?: string
  subtitle?: string
  maxQuantity?: number
}) {
  const cardsShouldScroll = products.length > 2 // 1 or 2 items fit in the screen width, so no need to scroll
  return (
    <ExtensionProviders>
      <Box marginTop="s" gap="xxs">
        <Text variant="bodyTitleLarge" numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
        {subtitle ? (
          <Text
            variant="bodySmall"
            color="foregrounds-subdued"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {subtitle}
          </Text>
        ) : null}
        <ScreenWidthContainer>
          <CardsContainer scrollable={cardsShouldScroll}>
            <Box
              flexDirection="row"
              gap="xs"
              marginLeft="gutter"
              marginRight={cardsShouldScroll ? 'none' : 'gutter'}
              marginTop="xs-s"
            >
              {products.map((product, index) => (
                <ProductsCarouselCard
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${product.id}-${index}`}
                  product={product}
                  onProductVariantUpdated={(variant, quantity) => {
                    onProductVariantUpdated(variant, quantity, index)
                  }}
                  shopId={shopId}
                  fixedWidth={products.length <= 2} // when we have two products or less each card dynamically takes 50% width
                  maxQuantity={maxQuantity}
                />
              ))}
            </Box>
          </CardsContainer>
        </ScreenWidthContainer>
      </Box>
    </ExtensionProviders>
  )
}

const CardsContainer = ({
  children,
  scrollable,
}: PropsWithChildren<{scrollable?: boolean}>) =>
  scrollable ? <ScrollView horizontal>{children}</ScrollView> : <>{children}</>
