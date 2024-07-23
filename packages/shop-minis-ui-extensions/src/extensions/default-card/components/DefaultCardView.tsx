import {
  Box,
  ImageBox,
  Text,
  PressableAnimated,
  Button,
} from '@shopify/shop-minis-platform-sdk'

interface Props {
  image?: {
    url: string
  }
  title: string
  text?: string | null
  actionText?: string | null
  onPress: () => void
}

export function DefaultCardView(props: Props) {
  const {image, title, text, actionText, onPress} = props

  return (
    <PressableAnimated onPress={onPress} accessibilityRole="button">
      <Box>
        <Text
          variant="subtitle"
          numberOfLines={1}
          ellipsizeMode="tail"
          marginBottom="xs"
        >
          {title}
        </Text>

        {text ? (
          <Text
            variant="bodySmall"
            numberOfLines={2}
            ellipsizeMode="tail"
            marginBottom="xs-s"
          >
            {text}
          </Text>
        ) : null}

        {image ? (
          <ImageBox
            width="100%"
            aspectRatio={3.12}
            source={{
              uri: image?.url,
            }}
            borderRadius="m"
            marginBottom="xs-s"
            resizeMode="cover"
          />
        ) : null}

        {actionText ? (
          <Box>
            <Button
              variant="secondary"
              size="l"
              text={actionText}
              onPress={onPress}
            />
          </Box>
        ) : null}
      </Box>
    </PressableAnimated>
  )
}
