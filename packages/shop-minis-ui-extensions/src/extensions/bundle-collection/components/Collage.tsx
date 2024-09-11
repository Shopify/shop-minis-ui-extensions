import {useCallback, useEffect, useState} from 'react'
import {StyleSheet} from 'react-native'
import {
  Box,
  BoxProps,
  Icon,
  Text,
  ImageBox,
} from '@shopify/shop-minis-platform-sdk'

export const DEFAULT_CONTAINER_SIZE = 56

interface Props {
  size?: number
  images: string[]
  onImageError?: (_: string) => void
  accessibilityLabel?: string
  borderRadius?: 's' | 'm'
}

const CollageImage = ({
  uri,
  imageCount,
  onImageError: onImageErrorCallback,
}: {
  uri: string
  imageCount: number
  onImageError?: (_: string) => void
}) => {
  const [imageError, setImageError] = useState<string>()
  const onImageError = useCallback(() => {
    setImageError(uri)
    onImageErrorCallback && onImageErrorCallback(uri)
  }, [onImageErrorCallback, uri])

  useEffect(() => {
    if (imageError !== uri) {
      setImageError(undefined)
    }
  }, [imageError, uri])

  return (
    <>
      {uri && !imageError ? (
        <>
          <ImageBox
            source={{
              uri,
            }}
            width="100%"
            height="100%"
            resizeMode="cover"
            onError={onImageError}
            testID="collage-image"
          />

          <Box
            {...StyleSheet.absoluteFillObject}
            backgroundColor="product-image-overlay"
          />
        </>
      ) : (
        <Box
          flex={1}
          alignItems="center"
          justifyContent="center"
          backgroundColor="image-tint-light"
        >
          <Icon
            color="foregrounds-subdued"
            size={imageCount === 1 ? 's' : 'xs'}
            name="no-image"
          />
        </Box>
      )}
    </>
  )
}

const BORDER_RADIUS_STYLE: BoxProps = {
  borderRadius: 'm',
  overflow: 'hidden' as const,
}

const COMPACT_RADIUS_STYLE: BoxProps = {
  borderRadius: 's',
  overflow: 'hidden' as const,
}

const Collage = ({
  images,
  size = DEFAULT_CONTAINER_SIZE,
  onImageError,
  accessibilityLabel,
  borderRadius = 'm',
}: Props) => {
  const itemSize = size / 2 - 1
  const imageCount = images.length
  const borderRadiusStyle =
    borderRadius === 's' ? COMPACT_RADIUS_STYLE : BORDER_RADIUS_STYLE

  // We render all images when there are at most 4, but only 3 (and a +X box) if there are more.
  const numRenderedImages = imageCount > 4 ? 3 : imageCount

  return (
    <Box
      width={size}
      height={size}
      flexWrap="wrap"
      justifyContent="space-between"
      alignContent="space-between"
      accessibilityLabel={accessibilityLabel}
      {...(imageCount > 1 ? borderRadiusStyle : {})}
    >
      {images.slice(0, numRenderedImages).map((image, index) => {
        const isFirstOfThree = imageCount === 3 && index === 0
        return (
          <Box
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            position="relative"
            width="100%"
            height="100%"
            maxWidth={imageCount > 1 ? itemSize : '100%'}
            maxHeight={imageCount > 2 && !isFirstOfThree ? itemSize : '100%'}
            {...(imageCount === 1 ? borderRadiusStyle : {})}
          >
            <CollageImage
              uri={image}
              imageCount={imageCount}
              onImageError={onImageError}
            />
          </Box>
        )
      })}
      {imageCount > 4 ? (
        <Box
          width={itemSize}
          height={itemSize}
          backgroundColor="backgrounds-subdued"
          alignItems="center"
          justifyContent="center"
        >
          <Text variant="caption" color="foregrounds-regular">
            +{imageCount - 3}
          </Text>
        </Box>
      ) : null}
    </Box>
  )
}

export default Collage
