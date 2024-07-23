import {useCallback} from 'react'
import {FlatList} from 'react-native'
import {Box, useTheme} from '@shopify/shop-minis-platform-sdk'

import type {ImageCollectionItem} from '..'

import {ImageUnit} from './image-unit'

const ITEM_WIDTH_MEDIUM = 200
const ITEM_HEIGHT_MEDIUM = 200
const ITEM_WIDTH_SMALL = 162
const ITEM_HEIGHT_SMALL = 162
const ITEM_BORDER_RADIUS = 'm'

interface ImageCarouselCollectionProps {
  items: ImageCollectionItem[]
  itemSize?: 's' | 'm'
  onImagePress: (item: ImageCollectionItem) => void
}

export const ImageCarouselCollection = ({
  items,
  itemSize = 'm',
  onImagePress,
}: ImageCarouselCollectionProps) => {
  const theme = useTheme()
  const width = itemSize === 'm' ? ITEM_WIDTH_MEDIUM : ITEM_WIDTH_SMALL
  const height = itemSize === 'm' ? ITEM_HEIGHT_MEDIUM : ITEM_HEIGHT_SMALL

  const renderItem = useCallback(
    ({item, index}: {item: ImageCollectionItem; index: number}) => {
      return (
        <Box paddingLeft={index === 0 ? 'none' : 'xs'} height={height}>
          <ImageUnit
            item={item}
            onPress={onImagePress}
            height={height}
            width={width}
            borderRadius={ITEM_BORDER_RADIUS}
          />
        </Box>
      )
    },
    [height, onImagePress, width]
  )

  return (
    <Box marginHorizontal="-gutter">
      <FlatList
        testID="IMAGE_CAROUSEL_COLLECTION"
        data={items}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: theme.spacing.gutter,
        }}
      />
    </Box>
  )
}
