import {useCallback, useState} from 'react'
import {LayoutChangeEvent, StyleSheet} from 'react-native'
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'
import {
  Box,
  Image,
  Text,
  PressableAnimated,
  ProductVariantPrice,
  useTheme,
} from '@shopify/shop-minis-platform-sdk'

import {calculateDiscountPercentage} from '../utils/percentageDiscount'
import {Price} from '../../types'

import {Badge} from './Badge'
import {Countdown} from './Countdown'

const TEST_ID = 'product-offer-card'
const MARGIN_TOP = 'm'

interface Props {
  onPress: () => void
  animateIn?: boolean
  marginTop?: 'none' | 's' | 'm' | 'l' | 'xl'
  discountedPrice: Price
  originalPrice: Price
  image: {
    url: string
  }
  expiredLabel: string
  title?: string
  expiresAt?: Date | null
}

export const ProductOfferCardView = ({
  discountedPrice,
  originalPrice,
  image,
  onPress,
  expiredLabel,
  title = 'Wait! Add this to your order too!',
  animateIn = true,
  marginTop = MARGIN_TOP,
  expiresAt,
}: Props) => {
  const {spacing} = useTheme()
  const animation = useSharedValue(0)
  const [isExpired, setIsExpired] = useState(
    expiresAt ? new Date(expiresAt) < new Date() : false
  )

  const animatedStyle = useAnimatedStyle(() => {
    return animateIn
      ? {
          opacity: interpolate(animation.value, [0, animation.value], [0, 1]),
          height: animation.value + spacing.s,
        }
      : {
          opacity: 1,
          height: 'auto',
        }
  })

  const handleLayout = useCallback(
    (event: LayoutChangeEvent) => {
      if (isExpired) return

      const height = event.nativeEvent.layout.height + spacing.s

      animation.value = withTiming(height, {
        duration: 600,
        easing: Easing.out(Easing.exp),
      })
    },
    [animation, isExpired, spacing.s]
  )

  const handleIsExpired = useCallback(() => {
    setIsExpired(true)
    animation.value = withDelay(
      2000,
      withTiming(0, {duration: 600, easing: Easing.out(Easing.exp)})
    )
  }, [animation])

  const widgetLabel = isExpired ? expiredLabel : title
  const productTitle = title
  const productImageUrl = image?.url
  const percentageDiscount = calculateDiscountPercentage(
    originalPrice,
    discountedPrice
  )

  return (
    <Animated.View style={[{overflow: 'hidden'}, animatedStyle]}>
      <Box marginTop={marginTop} testID={TEST_ID}>
        <PressableAnimated
          onPress={onPress}
          accessibilityRole="button"
          disabled={isExpired}
        >
          <Box
            paddingHorizontal="s"
            paddingVertical="s"
            width="100%"
            height={isExpired ? 'auto' : 'auto'}
            borderColor="dividers-regular"
            borderWidth={1}
            borderRadius="s"
            onLayout={handleLayout}
          >
            <Box
              flexDirection="row"
              justifyContent="space-between"
              marginBottom="xs-s"
            >
              <Text
                variant="bodyTitleLarge"
                color={
                  isExpired ? 'foregrounds-subdued' : 'foregrounds-regular'
                }
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{maxWidth: '60%'}}
              >
                {widgetLabel}
              </Text>
              {expiresAt ? (
                <Countdown
                  expiresAt={expiresAt}
                  isExpired={isExpired}
                  onExpiry={handleIsExpired}
                />
              ) : null}
            </Box>
            <Box flexDirection="row" alignItems="center">
              <Box
                width={72}
                aspectRatio={1}
                marginRight="xs-s"
                borderRadius="xs"
                overflow="hidden"
              >
                {productImageUrl ? (
                  <>
                    {isExpired ? (
                      <Box
                        {...StyleSheet.absoluteFillObject}
                        backgroundColor="backgrounds-overlay"
                      />
                    ) : null}
                    <Image
                      resizeMode="contain"
                      style={{
                        aspectRatio: 1,
                        width: '100%',
                        opacity: isExpired ? 0.3 : 1,
                      }}
                      source={{uri: productImageUrl}}
                    />
                  </>
                ) : (
                  <Box
                    {...StyleSheet.absoluteFillObject}
                    backgroundColor="backgrounds-overlay"
                  />
                )}
              </Box>
              <Box flex={1}>
                <Text
                  variant="bodyTitleSmall"
                  marginBottom="xxxs"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  color={
                    isExpired ? 'foregrounds-subdued' : 'foregrounds-regular'
                  }
                >
                  {productTitle}
                </Text>
                <ProductVariantPrice
                  variantPrice={{
                    // @ts-ignore
                    price: discountedPrice,
                    // @ts-ignore
                    compareAtPrice: originalPrice,
                  }}
                />
                {isExpired ? null : (
                  <Box
                    marginTop="xxs"
                    alignItems="center"
                    flexDirection="row"
                    justifyContent="space-between"
                  >
                    <Badge text={`${percentageDiscount}%`} />
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </PressableAnimated>
      </Box>
    </Animated.View>
  )
}
