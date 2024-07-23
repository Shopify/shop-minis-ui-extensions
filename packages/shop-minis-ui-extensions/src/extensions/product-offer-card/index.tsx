import {useCallback} from 'react'
import {Box, ExtensionSpacingProvider} from '@shopify/shop-minis-platform-sdk'
import {useExtensionShopActions} from '@shopify/shop-minis-platform-sdk/actions'

import {Image, Order, Price, Product} from '../types'

import {ProductOfferCardView} from './components/ProductOfferCardView'

export interface ProductOfferCardData {
  product: Product
  order: Order
  offer: {
    discountedPrice: Price
    originalPrice: Price
    variantId?: string
    title?: string
    expiresAt?: Date
    image: Image
  }
}

export function ProductOfferCard({
  product: _product,
  offer,
  order: _order,
}: ProductOfferCardData) {
  const {openMiniViewer} = useExtensionShopActions()

  const onPress = useCallback(async () => {
    openMiniViewer()
  }, [openMiniViewer])

  return (
    <ExtensionSpacingProvider>
      <Box>
        <ProductOfferCardView
          onPress={onPress}
          discountedPrice={offer.discountedPrice}
          originalPrice={offer.originalPrice}
          image={offer.image}
          expiredLabel="Expired"
          title={offer.title}
          expiresAt={offer.expiresAt}
          animateIn
        />
      </Box>
    </ExtensionSpacingProvider>
  )
}
