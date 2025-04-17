import {
  Box,
  ImageBox,
  Text,
  PressableAnimated,
  Icon,
} from '@shopify/shop-minis-platform-sdk'

import {IconName} from '../types'

interface MarketingCardViewProps {
  image: {
    url: string
  }
  iconName?: IconName
  actionText: string
  onPress: () => void
  color?: 'white' | 'black'
}

export function MarketingCardView(props: MarketingCardViewProps) {
  const {
    image,
    iconName = 'arrow-right',
    actionText,
    onPress,
    color = 'white',
  } = props

  return (
    <PressableAnimated onPress={onPress} accessibilityRole="button">
      <Box>
        <ImageBox
          width="100%"
          aspectRatio={2}
          source={{
            uri: image.url,
          }}
          borderRadius="m"
          resizeMode="cover"
        >
          <Box
            flex={1}
            justifyContent="space-between"
            flexDirection="row"
            alignItems="flex-end"
            marginHorizontal="s"
          >
            <Box flex={1} justifyContent="space-between" flexDirection="row">
              <Text
                variant="heroNormal"
                color={color === 'white' ? 'opaque-white' : 'opaque-black'}
              >
                {actionText}
              </Text>
              <Icon
                style={{alignSelf: 'center'}}
                name={iconName}
                size="m"
                color={color === 'white' ? 'opaque-white' : 'opaque-black'}
              />
            </Box>
          </Box>
        </ImageBox>
      </Box>
    </PressableAnimated>
  )
}
