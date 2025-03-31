import {
  Box,
  ImageBox,
  Text,
  PressableAnimated,
  Icon,
} from '@shopify/shop-minis-platform-sdk'

import {IconName} from '../types'

interface Props {
  image: {
    url: string
  }
  iconName?: IconName
  actionText: string
  onPress: () => void
}

export function MarketingCardView(props: Props) {
  const {image, iconName = 'arrow-right', actionText, onPress} = props

  return (
    <PressableAnimated onPress={onPress} accessibilityRole="button">
      <Box>
        <ImageBox
          width="100%"
          aspectRatio={2.2}
          source={{
            uri: image.url,
          }}
          borderRadius="m"
          resizeMode="center"
        >
          <Box
            flex={1}
            justifyContent="space-between"
            flexDirection="row"
            alignItems="flex-end"
            marginHorizontal="s"
          >
            <Box flex={1} justifyContent={'space-between'} flexDirection="row">
              <Text variant="heroNormal">{actionText}</Text>
              <Icon style={{alignSelf: 'center'}} name={iconName} size="m" />
            </Box>
          </Box>
        </ImageBox>
      </Box>
    </PressableAnimated>
  )
}
