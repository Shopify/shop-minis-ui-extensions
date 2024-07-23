import {useMemo} from 'react'
import {
  Box,
  ImageBox,
  Text,
  ProductVariantPrice,
} from '@shopify/shop-minis-platform-sdk'

import {CARD_WIDTH} from '../utils/constants'
import type {VideoCollectionItemType} from '..'

const PRODUCT_IMAGE_SIZE = 40

export function ProductDetails({
  product,
}: {
  product: VideoCollectionItemType['relatedProducts'][number]['product']
}) {
  const imageSource = useMemo(() => {
    if (!product) {
      return undefined
    }

    /* TODO: Use image resize util from Shop */
    return {uri: product.image?.url}
  }, [product])

  if (!product) {
    return null
  }

  return (
    <Box marginTop="xs-s" width={CARD_WIDTH}>
      <Box flexDirection="row" alignItems="center">
        <ImageBox
          source={imageSource}
          width={PRODUCT_IMAGE_SIZE}
          height={PRODUCT_IMAGE_SIZE}
          marginRight="xs"
          minWidth={0}
          borderRadius="xs"
        />

        <Box flexShrink={1}>
          <Text
            color="foregrounds-regular"
            fontSize={12}
            fontWeight="500"
            lineHeight={16}
            numberOfLines={1}
            ellipsizeMode="tail"
            variant="captionMedium"
          >
            {product.title}
          </Text>

          {/* TODO: Add a ProductPriceLine component to be used here https://github.com/Shopify/shop-client/issues/38755 */}
          <ProductVariantPrice
            variantPrice={{
              __typename: 'ProductVariant',
              // @ts-expect-error: the currency code is a string which is fine at runtime
              price: {__typename: 'Money', ...product.price},
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}
