import type {ImageCollectionItem} from '.'

export function getItemReportingData(item: ImageCollectionItem) {
  const productIds =
    item?.relatedProducts
      .map(relatedProduct => relatedProduct.product?.id)
      .filter(
        (productId): productId is string => typeof productId === 'string'
      ) ?? []

  return {
    productIds,
  }
}
