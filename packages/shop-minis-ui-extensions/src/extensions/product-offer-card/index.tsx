import {useCallback} from 'react'
import {Box, ExtensionProviders} from '@shopify/shop-minis-platform-sdk'
import {useShopActions} from '@shopify/shop-minis-platform-sdk/actions'

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
  onPress?: () => void
}

export function ProductOfferCard({
  product: _product,
  offer,
  order: _order,
  onPress,
}: ProductOfferCardData) {
  const {openMiniViewer} = useShopActions()

  const onPressHandler = useCallback(async () => {
    if (onPress) {
      onPress()
      return
    }

    openMiniViewer()
  }, [onPress, openMiniViewer])

  return (
    <ExtensionProviders>
      <Box>
        <ProductOfferCardView
          onPress={onPressHandler}
          discountedPrice={offer.discountedPrice}
          originalPrice={offer.originalPrice}
          image={offer.image}
          expiredLabel="Expired"
          title={offer.title}
          expiresAt={offer.expiresAt}
          animateIn
        />
      </Box>
    </ExtensionProviders>
  )
}
