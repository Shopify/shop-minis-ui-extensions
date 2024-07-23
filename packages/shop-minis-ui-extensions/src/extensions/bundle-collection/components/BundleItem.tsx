import {
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Platform,
  Dimensions,
} from 'react-native'
import {
  Badge,
  Box,
  Button,
  Text,
  useTheme,
} from '@shopify/shop-minis-platform-sdk'

import Collage from './Collage'

export interface BundleItem {
  title: string
  subtitle?: string
  imageUrls: string[]
  badgeText?: string
  actionButtonText: string
  onActionButtonPress: () => void
}

interface Props extends BundleItem {
  uniqueItem: boolean
}

const IMAGE_SIZE = 104

export function BundleItem({
  title,
  subtitle,
  imageUrls,
  badgeText,
  actionButtonText,
  onActionButtonPress,
  uniqueItem,
}: Props) {
  const theme = useTheme()
  const itemWidth =
    Dimensions.get('window').width -
    theme.spacing.gutter * 2 - // negative margin of the parent
    (uniqueItem ? 0 : theme.spacing.s) // gap between items

  const itemComponent = (
    <Box
      flexDirection="row"
      padding="m"
      gap="xs-s"
      borderRadius="m"
      borderWidth={1}
      borderColor="borders-regular"
      backgroundColor="backgrounds-regular"
      minHeight={IMAGE_SIZE + 6 * 2}
      width={itemWidth}
    >
      <Box borderRadius="s" overflow="hidden">
        <Collage images={imageUrls} size={IMAGE_SIZE} />
      </Box>
      {badgeText ? (
        <Box position="absolute" top={8} left={8}>
          <Badge variant="saleFilled" text={badgeText} />
        </Box>
      ) : null}

      <Box flex={1} gap="xs-s" justifyContent="space-between">
        <Box gap="xs" flexDirection="row" justifyContent="space-between">
          <Text
            color="foregrounds-regular"
            variant="bodySmall"
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
        </Box>
        {subtitle ? (
          <Box>
            <Text
              color="foregrounds-regular"
              variant="caption"
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {subtitle}
            </Text>
          </Box>
        ) : null}

        <Button
          variant="secondary"
          size="m"
          text={actionButtonText}
          onPress={onActionButtonPress}
        />
      </Box>
    </Box>
  )

  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback
        onPress={onActionButtonPress}
        delayPressIn={130}
        delayPressOut={130}
      >
        {itemComponent}
      </TouchableNativeFeedback>
    )
  } else {
    return (
      <TouchableWithoutFeedback
        onPress={onActionButtonPress}
        delayPressIn={130}
        delayPressOut={130}
      >
        {itemComponent}
      </TouchableWithoutFeedback>
    )
  }
}
