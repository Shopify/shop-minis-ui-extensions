import {
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Platform,
  Dimensions,
} from 'react-native'
import {
  Box,
  Button,
  ImageBox,
  Text,
  FormatMoney,
  CurrencyCode,
  useTheme,
} from '@shopify/shop-minis-platform-sdk'

interface Props {
  image?: {
    url: string
    altText?: string | null
    height?: number | null
    width?: number | null
  } | null
  title: string
  price: {
    amount: string
    currencyCode: string
  }
  compareAtPrice?: {
    amount: string
    currencyCode: string
  } | null
  onPress: () => void
  uniqueItem: boolean
}

const IMAGE_SIZE = 104

export function BundleItem({
  title,
  price,
  compareAtPrice,
  image,
  onPress,
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
      {image?.url ? (
        <Box borderRadius="s" overflow="hidden">
          <ImageBox
            accessibilityRole="image"
            source={{uri: image.url}}
            width={IMAGE_SIZE}
            aspectRatio={1}
          />
          <Box
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
            backgroundColor="product-image-overlay"
          />
        </Box>
      ) : null}
      <Box flex={1} gap="xs-s" justifyContent="space-between">
        <Box gap="xs" flexDirection="row" justifyContent="space-between">
          <Text
            color="foregrounds-regular"
            variant="bodySmall"
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{maxWidth: '52%'}}
          >
            {title}
          </Text>
          <Box>
            {compareAtPrice ? (
              <Text>
                <FormatMoney
                  variant="bodySmall"
                  color="highlights-discounted"
                  price={{
                    amount: price.amount,
                    currencyCode: price.currencyCode as CurrencyCode,
                  }}
                />
              </Text>
            ) : null}
            <Text>
              <FormatMoney
                variant="bodySmall"
                color={
                  compareAtPrice ? 'foregrounds-subdued' : 'foregrounds-regular'
                }
                textDecorationLine={compareAtPrice ? 'line-through' : 'none'}
                price={
                  (compareAtPrice as {
                    amount: string
                    currencyCode: CurrencyCode
                  }) ??
                  (price as {
                    amount: string
                    currencyCode: CurrencyCode
                  })
                }
              />
            </Text>
          </Box>
        </Box>
        <Button
          variant="secondary"
          size="m"
          text="View bundle"
          onPress={onPress}
        />
      </Box>
    </Box>
  )

  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback
        onPress={onPress}
        delayPressIn={130}
        delayPressOut={130}
      >
        {itemComponent}
      </TouchableNativeFeedback>
    )
  } else {
    return (
      <TouchableWithoutFeedback
        onPress={onPress}
        delayPressIn={130}
        delayPressOut={130}
      >
        {itemComponent}
      </TouchableWithoutFeedback>
    )
  }
}
