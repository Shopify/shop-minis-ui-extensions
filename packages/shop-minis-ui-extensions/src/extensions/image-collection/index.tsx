import {useCallback} from 'react'
import {
  Box,
  Button,
  ExtensionSpacingProvider,
  useMinisParams,
} from '@shopify/shop-minis-platform-sdk'
import {SectionTitle} from '@shopify/shop-minis-platform-sdk/src/components/SectionTitle'
import {useExtensionShopActions} from '@shopify/shop-minis-platform-sdk/actions'

import {Image, Product} from '../types'
import {isStoreExtensionTarget} from '../../utils/extensionTargetUtils'

import {ImageGridCollection} from './components/image-grid-collection'
import {ImageCarouselCollection} from './components/image-carousel-collection'

const DEFAULT_TITLE = 'Shop our Instagram'

export interface ImageCollectionItem {
  image: Image
  relatedProducts: Array<{
    product?: Product
    productVariantId?: string
  }>
  externalId: string
  description?: string
  displayDate?: Date
}

export interface ImageCollectionData {
  items: ImageCollectionItem[]
  title?: string
  layout: 'GRID' | 'CAROUSEL'
}

export function ImageCollection({items, title, layout}: ImageCollectionData) {
  const {openMiniViewer} = useExtensionShopActions()
  const {extensionContext} = useMinisParams()
  const childrenMarginBottom = isStoreExtensionTarget(
    extensionContext?.extensionTarget
  )
    ? 'xs-s'
    : 's'

  const handleItemPressed = useCallback(
    (item: ImageCollectionItem) => {
      openMiniViewer({externalId: item?.externalId})
    },
    [openMiniViewer]
  )

  const handleViewAllPressed = useCallback(() => {
    openMiniViewer()
  }, [openMiniViewer])

  const imageCollectionContent =
    layout === 'CAROUSEL' ? (
      <ImageCarouselCollection items={items} onImagePress={handleItemPressed} />
    ) : (
      <ImageGridCollection items={items} onImagePress={handleItemPressed} />
    )

  return (
    <ExtensionSpacingProvider>
      <SectionTitle
        location={extensionContext?.extensionTarget!}
        title={title || DEFAULT_TITLE}
      />
      <Box marginBottom={childrenMarginBottom}>{imageCollectionContent}</Box>
      <Button
        text="View all"
        variant="tertiary"
        size="m"
        onPress={handleViewAllPressed}
      />
    </ExtensionSpacingProvider>
  )
}
