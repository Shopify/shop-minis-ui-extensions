import {
  Box,
  ProductCard,
  VariantPicker,
  ProductOption,
  Variant,
  Button,
  theme,
} from '@shopify/shop-minis-platform-sdk'
import {ComponentProps, useCallback, useState} from 'react'
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
  onProductAddedToBundle,
  onProductRemovedFromBundle,
  fixedWidth,
}: {
  product: ProductsCarouselProduct
  shopId: string
  onProductAddedToBundle: (
    product: ProductsCarouselProduct,
    variant: ProductsCarouselProduct['defaultVariant']
  ) => void
  onProductRemovedFromBundle: (
    product: ProductsCarouselProduct,
    variant: ProductsCarouselProduct['defaultVariant']
  ) => void
  fixedWidth?: boolean
}) {
  const [selectedVariant, setSelectedVariant] = useState(product.defaultVariant)
  const [isAddedToBundle, setIsAddedToBundle] = useState(false)

  const toggleAddedToBundle = useCallback(() => {
    const callback = isAddedToBundle
      ? onProductRemovedFromBundle
      : onProductAddedToBundle
    callback(product, selectedVariant)
    setIsAddedToBundle(!isAddedToBundle)
  }, [
    isAddedToBundle,
    onProductAddedToBundle,
    onProductRemovedFromBundle,
    product,
    selectedVariant,
  ])

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
        <VariantPicker
          variants={product.variants}
          productOptions={product.options}
          initialSelectedOptions={selectedVariant.selectedOptions}
          condensed
          onProductVariantUpdated={(variant: Variant | null) => {
            if (variant) {
              // @ts-expect-error - variants picker doesn't know that we are working with a different shape of variants
              setSelectedVariant(variant)
            }
          }}
        />
      </Box>
      <Button
        variant={isAddedToBundle ? 'dangerous' : 'secondary'}
        text={isAddedToBundle ? 'Remove' : 'Add'}
        onPress={toggleAddedToBundle}
      />
    </Box>
  )
}
