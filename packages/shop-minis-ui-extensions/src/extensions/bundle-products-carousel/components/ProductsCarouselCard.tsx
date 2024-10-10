import {
  Box,
  ProductCard,
  CompactVariantPicker,
  ProductOption,
  Variant,
  theme,
} from '@shopify/shop-minis-platform-sdk'
import {ComponentProps, useState} from 'react'
import {Dimensions} from 'react-native'

const {width: SCREEN_WIDTH} = Dimensions.get('screen')

type ProductCardProduct = ComponentProps<typeof ProductCard>['product']

export type ProductsCarouselProductVariant =
  ProductCardProduct['defaultVariant'] & Variant

export interface ProductsCarouselProduct extends ProductCardProduct {
  variants: ProductsCarouselProductVariant[]
  options: ProductOption[]
  defaultVariant: ProductsCarouselProductVariant
}

const CAROUSEL_CARD_DEFAULT_WIDTH = SCREEN_WIDTH / 2.5
const CAROUSEL_CARD_UNIT_WIDTH = SCREEN_WIDTH / 2 - theme.spacing.gutter

export function ProductsCarouselCard({
  product,
  shopId,
  onProductVariantUpdated,
  fixedWidth,
}: {
  product: ProductsCarouselProduct
  shopId: string
  onProductVariantUpdated: (
    variant: ProductsCarouselProductVariant,
    quantity: number
  ) => void
  fixedWidth?: boolean
}) {
  const [selectedVariant, setSelectedVariant] = useState(product.defaultVariant)

  return (
    <Box
      key={product.id}
      flex={fixedWidth ? undefined : 1}
      maxWidth={
        fixedWidth ? CAROUSEL_CARD_UNIT_WIDTH : CAROUSEL_CARD_DEFAULT_WIDTH
      }
    >
      <ProductCard
        product={product}
        shopId={shopId}
        selectedProductVariant={selectedVariant}
      />
      <Box marginVertical="xs">
        <CompactVariantPicker
          variants={product.variants}
          productOptions={product.options}
          initialSelectedOptions={product.defaultVariant.selectedOptions}
          selectedOptions={selectedVariant.selectedOptions}
          onProductVariantUpdated={(
            variant: Variant | null,
            quantity?: number
          ) => {
            if (variant) {
              // @ts-expect-error - variants picker doesn't know that we are working with a different shape of variants
              setSelectedVariant(variant)
              // @ts-expect-error - variants picker doesn't know that we are working with a different shape of variants
              onProductVariantUpdated(variant, quantity)
            }
          }}
        />
      </Box>
    </Box>
  )
}
