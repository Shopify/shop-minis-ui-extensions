import {useCallback} from 'react'
import {StyleProp} from 'react-native'
import {ImageStyle} from 'react-native-fast-image'
import {ImageBox, PressableAnimated} from '@shopify/shop-minis-platform-sdk'

import type {ImageCollectionItem} from '..'

interface ImageUnitProps {
  item: ImageCollectionItem
  width: number
  height: number
  onPress: (item: ImageCollectionItem) => void
  borderRadius?: React.ComponentProps<typeof ImageBox>['borderRadius']
  style?: StyleProp<ImageStyle>
}

export function ImageUnit({
  item,
  width,
  height,
  onPress,
  borderRadius,
  style,
}: ImageUnitProps) {
  const handleImagePress = useCallback(() => {
    onPress(item)
  }, [item, onPress])

  return (
    <PressableAnimated onPress={handleImagePress}>
      <ImageBox
        width={width}
        height={height}
        flexGrow={1}
        source={{
          uri: item.image.url,
        }}
        backgroundColor="backgrounds-placeholder"
        borderRadius={borderRadius}
        style={style}
      />
    </PressableAnimated>
  )
}
