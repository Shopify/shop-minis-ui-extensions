import {useCallback, useMemo} from 'react'
import {FlatListProps, useWindowDimensions} from 'react-native'
import {
  Box,
  ExtensionSpacingProvider,
  Text,
  useTheme,
} from '@shopify/shop-minis-platform-sdk'
import {useExtensionShopActions} from '@shopify/shop-minis-platform-sdk/actions'
import Animated, {useAnimatedRef} from 'react-native-reanimated'
import {
  FlatList,
  NativeViewGestureHandlerProperties,
} from 'react-native-gesture-handler'

import {Product} from '../types'

import {BundleItem} from './components/BundleItem'

interface BundleItem {
  product: Product
  childProducts: Product[]
}

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

const DEFAULT_TITLE = 'Bundle and save'

export function BundleUpsell({bundles, title}: BundleUpsellData) {
  const theme = useTheme()
  const {navigateToProduct} = useExtensionShopActions()

  const onPressHandler = useCallback(
    async (productId: string) => {
      navigateToProduct({productId})
    },
    [navigateToProduct]
  )

  const itemsSeparator = () => <Box width={theme.spacing.s} />

  const renderItem = useCallback(
    ({item, index}: {item: BundleItem; index: number}) => {
      return (
        <BundleItem
          {...item.product}
          key={`${item.product.id}-${index}`}
          onPress={() => onPressHandler(item.product.id)}
          uniqueItem={bundles.length === 1}
        />
      )
    },
    [onPressHandler, bundles]
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
    <ExtensionSpacingProvider>
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
            keyExtractor={item => item.product.id}
            renderItem={renderItem}
            ItemSeparatorComponent={itemsSeparator}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: theme.spacing.gutter,
            }}
          />
        </Box>
      </Box>
    </ExtensionSpacingProvider>
  )
}
