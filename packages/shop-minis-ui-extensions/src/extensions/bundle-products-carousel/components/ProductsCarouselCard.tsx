import {
  Box,
  ProductCard,
  VariantPicker,
  ProductOption,
  Variant,
  Button,
} from '@shopify/shop-minis-platform-sdk'
import {ComponentProps, useCallback, useState} from 'react'

type ProductCardProduct = ComponentProps<typeof ProductCard>['product']

export type ProductsCarouselProductVariant =
  ProductCardProduct['defaultVariant'] & Variant

export interface ProductsCarouselProduct extends ProductCardProduct {
  variants: ProductsCarouselProductVariant[]
  options: ProductOption[]
  defaultVariant: ProductsCarouselProductVariant
}

export function ProductsCarouselCard({
  product,
  shopId,
  onProductAddedToBundle,
  onProductRemovedFromBundle,
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
    <Box key={product.id} maxWidth={150}>
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
