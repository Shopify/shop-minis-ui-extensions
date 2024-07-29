import {useCallback, useMemo} from 'react'
import {FlatListProps, useWindowDimensions} from 'react-native'
import {
  Box,
  ExtensionProviders,
  Text,
  useTheme,
} from '@shopify/shop-minis-platform-sdk'
import Animated, {useAnimatedRef} from 'react-native-reanimated'
import {
  FlatList,
  NativeViewGestureHandlerProperties,
} from 'react-native-gesture-handler'

import {
  BundleItem,
  type BundleItem as BundleItemType,
} from './components/BundleItem'

export interface BundleUpsellData {
  bundles: BundleItem[]
  title?: string
}

const ReanimatedFlatList = Animated.createAnimatedComponent<
  NativeViewGestureHandlerProperties &
    FlatListProps<BundleItem> & {
      ref?: React.Ref<FlatList<any>>
    }
>(FlatList)

const DEFAULT_TITLE = 'Mix and match'

/**
 * BundleCollection is a component used to display available product bundles
 *
 * The BundleCollection displays a carousel of product bundle cards.
 * Each card shows the bundle's title, subtitle, images, a badge and an action button.
 * Pressing on a card or the card's action button calls the bundle's callback function.
 *
 *
 * @component
 * @example
 * <BundleCollection
 *   title={title}
 *   bundles={bundles}
 * />
 *
 * @param title - The title to be displayed above the bundle carousel. Defaults to "Mix and match".
 * @param bundles - An array of `BundleItem` containing the bundle's title, subtitle (optional),
 * an array of image URLs, text for the badge (optional), text for the action button and a callback function for the action button.
 */
export function BundleCollection({bundles, title}: BundleUpsellData) {
  const theme = useTheme()

  const itemsSeparator = () => <Box width={theme.spacing.s} />

  const renderItem = useCallback(
    ({item, index}: {item: BundleItemType; index: number}) => {
      return (
        <BundleItem
          {...item}
          key={`${item.title}-${index}`}
          uniqueItem={bundles.length === 1}
        />
      )
    },
    [bundles]
  )

  const scrollRef = useAnimatedRef<FlatList<any>>()
  const {width: screenWidth} = useWindowDimensions()
  const cardWidth = screenWidth - theme.spacing.gutter * 2

  const calculateOffsets = useMemo(() => {
    return bundles.map((_, index) => {
      return (cardWidth - theme.spacing.xs) * index
    })
  }, [bundles, cardWidth, theme.spacing.xs])

  return (
    <ExtensionProviders>
      <Box marginBottom="s">
        <Text variant="bodyTitleLarge" marginBottom="s">
          {title || DEFAULT_TITLE}
        </Text>
        <Box marginHorizontal="-gutter">
          <ReanimatedFlatList
            ref={scrollRef}
            data={bundles}
            snapToOffsets={calculateOffsets}
            decelerationRate="fast"
            horizontal
            scrollEnabled={bundles.length > 1}
            keyExtractor={item => item.title}
            renderItem={renderItem}
            ItemSeparatorComponent={itemsSeparator}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: theme.spacing.gutter,
            }}
          />
        </Box>
      </Box>
    </ExtensionProviders>
  )
}
