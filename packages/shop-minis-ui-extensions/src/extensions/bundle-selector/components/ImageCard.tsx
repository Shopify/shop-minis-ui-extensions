import {useMemo} from 'react'
import {Box, Text, ImageBox, Divider} from '@shopify/shop-minis-platform-sdk'

interface ImageCardProps {
  uri?: string
  title: string
}

const CARD_WIDTH = 120
const IMAGE_STYLE = {
  width: '100%' as const,
  height: '100%' as const,
}

export const ImageCard = ({uri, title}: ImageCardProps) => {
  const source = useMemo(
    () =>
      uri
        ? {
            uri,
          }
        : undefined,
    [uri]
  )

  return (
    <Box width={CARD_WIDTH}>
      <Box
        backgroundColor="backgrounds-regular"
        borderRadius="s100"
        borderWidth={1}
        borderColor="borders-regular"
        overflow="hidden"
      >
        <Box aspectRatio={1}>
          <ImageBox source={source} style={IMAGE_STYLE} />
        </Box>
        <Divider variant="list_divider" borderColor="borders-regular" />
        <Text
          variant="bodyTitleSmall"
          numberOfLines={1}
          ellipsizeMode="tail"
          padding="xs"
        >
          {title}
        </Text>
      </Box>
    </Box>
  )
}
