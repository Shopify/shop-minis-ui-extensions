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

export function BundleProductsCarousel({
  products,
  shopId,
  subtitle,
  onProductVariantUpdated,
  title = 'Bundle and Save',
}: {
  products: ProductsCarouselProduct[]
  shopId: string
  onProductVariantUpdated: (
    variant: ProductsCarouselProductVariant,
    quantity: number
  ) => void
  title?: string
  subtitle?: string
}) {
  const cardsShouldScroll = products.length > 2 // 1 or 2 items fit in the screen width, so no need to scroll

  return (
    <ExtensionProviders>
      <Box marginTop="s" gap="xxs">
        <Text variant="bodyTitleLarge">{title}</Text>
        {subtitle ? (
          <Text variant="bodySmall" color="foregrounds-subdued">
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
                  onProductVariantUpdated={onProductVariantUpdated}
                  shopId={shopId}
                  fixedWidth={products.length <= 2} // when we have two products or less each card dynamically takes 50% width
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
