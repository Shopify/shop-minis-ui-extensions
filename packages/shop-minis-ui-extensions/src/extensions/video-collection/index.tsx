import {useExtensionShopActions} from '@shopify/shop-minis-platform-sdk/actions'
import {SectionTitle} from '@shopify/shop-minis-platform-sdk/src/components/SectionTitle'
import {
  Box,
  useTheme,
  Button,
  useMinisParams,
  ExtensionProviders,
} from '@shopify/shop-minis-platform-sdk'
import {useCallback, useMemo, useState, useRef} from 'react'
import {FlatList, ListRenderItem, ViewToken} from 'react-native'
import {useIsFocused} from '@react-navigation/native'
import debounce from 'lodash/debounce'

import {Image, Product, Video} from '../types'
import {isStoreExtensionTarget} from '../../utils/extensionTargetUtils'

import {CARD_WIDTH} from './utils/constants'
import {VideoCollectionItem} from './components/video-collection-item'

const VIEWABILITY_CONFIG = {
  itemVisiblePercentThreshold: 100,
}

const DEFAULT_TITLE = 'Videos'

export interface VideoCollectionItemType {
  video: Video
  previewVideo?: Video
  fallbackImage: Image
  relatedProducts: Array<{
    product?: Product
    productVariantId?: string
  }>
  externalId: string
}

export interface VideoCollectionData {
  title?: string
  items: VideoCollectionItemType[]
}

export function VideoCollection({
  items,
  title = DEFAULT_TITLE,
}: VideoCollectionData) {
  const {openMiniViewer} = useExtensionShopActions()
  const {extensionContext} = useMinisParams()

  const theme = useTheme()
  const itemSize = CARD_WIDTH + theme.spacing.xs * 2
  const [currentViewableItemIndex, setCurrentViewableItemIndex] = useState(0)
  const isFocused = useIsFocused()
  const childrenMarginBottom = isStoreExtensionTarget(
    extensionContext?.extensionTarget
  )
    ? 'xs-s'
    : 's'

  const itemVisibilityExtraData = useMemo(() => {
    return {
      currentViewableItemIndex,
      isFocused,
    }
  }, [currentViewableItemIndex, isFocused])

  const handleViewableItemsChanged = useRef(
    debounce(({viewableItems}: {viewableItems: ViewToken[]}) => {
      if (viewableItems.length > 0) {
        const {index} = viewableItems[0]

        if (index !== null) setCurrentViewableItemIndex(index)
      }
    }, 500)
  ).current

  const handleItemPressed = useCallback(
    (item?: VideoCollectionItemType) => {
      openMiniViewer({externalId: item?.externalId})
    },
    [openMiniViewer]
  )

  const renderItem = useCallback<ListRenderItem<VideoCollectionItemType>>(
    ({item, index}) => {
      return (
        <Box marginLeft={index === 0 ? 'none' : 's'}>
          <VideoCollectionItem
            item={item}
            onPress={handleItemPressed}
            isActive={index === currentViewableItemIndex && isFocused}
          />
        </Box>
      )
    },
    [handleItemPressed, currentViewableItemIndex, isFocused]
  )

  return (
    <ExtensionProviders>
      <SectionTitle
        location={extensionContext?.extensionTarget!}
        title={title}
      />
      <Box marginBottom={childrenMarginBottom} marginHorizontal="-gutter">
        <FlatList
          renderItem={renderItem}
          data={items}
          onViewableItemsChanged={handleViewableItemsChanged}
          viewabilityConfig={VIEWABILITY_CONFIG}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={itemSize}
          decelerationRate="fast"
          extraData={itemVisibilityExtraData}
          contentContainerStyle={{
            paddingHorizontal: theme.spacing.gutter,
          }}
        />
      </Box>
      <Button
        text="View all"
        variant="tertiary"
        size="m"
        onPress={() => handleItemPressed()}
      />
    </ExtensionProviders>
  )
}
