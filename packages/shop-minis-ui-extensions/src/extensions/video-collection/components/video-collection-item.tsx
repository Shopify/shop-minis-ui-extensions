import {useCallback, memo, useMemo, useEffect, useState} from 'react'
import {Platform} from 'react-native'
import Video, {ResizeMode, PosterResizeModeType} from 'react-native-video'
import {
  Box,
  Icon,
  ImageBox,
  PressableAnimated,
  useAccessibilityInfo,
} from '@shopify/shop-minis-platform-sdk'

import {CARD_HEIGHT, CARD_WIDTH} from '../utils/constants'
import type {VideoCollectionItemType} from '..'

import {ProductDetails} from './product-details'

interface Props {
  item: VideoCollectionItemType
  onPress: (item: VideoCollectionItemType) => void
  isActive: boolean
  showProductDetails?: boolean
}

const BUFFER_CONFIG = {
  bufferForPlaybackMs: 500,
  bufferForPlaybackAfterRebufferMs: 500,
  minBufferMs: 500,
  maxBufferMs: 5000,
}

const VIDEO_STYLE = {
  aspectRatio: CARD_WIDTH / CARD_HEIGHT,
}

function _VideoCollectionItem({
  item,
  isActive,
  onPress,
  showProductDetails = false,
}: Props) {
  const {isReduceMotionEnabled} = useAccessibilityInfo()
  const [isViewed, setIsViewed] = useState(false)

  useEffect(() => {
    if (!isViewed && isActive) {
      setIsViewed(true)
    }
  }, [isActive, isViewed])

  /**
   * Don't render videos on Android devices:
   * - Displaying multiple videos causes performance issues
   * - The video component often flashes empty when loading the poster image or video
   */
  const renderVideo =
    !isReduceMotionEnabled &&
    Platform.OS !== 'android' &&
    Boolean(item.video.url)

  /**
   * Always show the fallback image if the video component is not rendered (e.g. reduce motion, Android device)
   *
   * Also show it if:
   * - The item is not active
   * - The item has not been viewed -- if it's been viewed, we want to show the paused frame of the video
   */
  const showFallbackImage = !renderVideo || !(isViewed || isActive)

  const handleImagePress = useCallback(() => {
    onPress(item)
  }, [item, onPress])

  const videoSource = useMemo(() => {
    const uri = item.previewVideo ? item.previewVideo.url : item.video.url

    return {uri}
  }, [item.previewVideo, item.video])

  const taggedProduct = useMemo(() => {
    if (!showProductDetails) {
      return null
    }

    if ('relatedProducts' in item && item.relatedProducts?.length) {
      return item.relatedProducts[0].product
    }
  }, [item, showProductDetails])

  return (
    <PressableAnimated
      isListItem
      accessibilityRole="button"
      onPress={handleImagePress}
    >
      <Box
        overflow="hidden"
        width={CARD_WIDTH}
        height={CARD_HEIGHT}
        borderRadius="m"
      >
        {showFallbackImage ? (
          <ImageBox
            width={CARD_WIDTH}
            height={CARD_HEIGHT}
            source={{uri: item.fallbackImage.url}}
          />
        ) : null}

        {renderVideo ? (
          <Video
            source={videoSource}
            style={VIDEO_STYLE}
            paused={!isActive}
            resizeMode={ResizeMode.COVER}
            poster={item.fallbackImage.url}
            posterResizeMode={PosterResizeModeType.COVER}
            repeat
            muted
            bufferConfig={BUFFER_CONFIG}
            // This allows background audio to keep playing when a video is playing
            disableFocus
          />
        ) : (
          <Box position="absolute" bottom={0} right={0} left={0} padding="s">
            <Icon name="play" size="m" color="foregrounds-contrasting" />
          </Box>
        )}
      </Box>

      {taggedProduct ? <ProductDetails product={taggedProduct} /> : null}
    </PressableAnimated>
  )
}

export const VideoCollectionItem = memo(_VideoCollectionItem)
