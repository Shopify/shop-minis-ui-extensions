import {useMemo} from 'react'
import {
  Box,
  Icon,
  Text,
  PressableAnimated,
  BoxProps,
} from '@shopify/shop-minis-platform-sdk'
import {useTextScaleSettings} from '@shopify/shop-minis-platform-sdk/src/utils/largeTextUtils'

interface Props {
  label: string
  selectedValue?: string
  onPress: () => void
  testID?: string
  editable?: boolean
}

export const Selector = ({
  label,
  selectedValue,
  onPress,
  editable = true,
  ...boxProps
}: BoxProps & Props) => {
  const {flexDirection, isAccessibleFontScale} = useTextScaleSettings()
  const selectorStyles = useMemo(
    () => ({
      paddingVertical: 's' as const,
      labelTextVariant: 'bodyTitleLarge' as const,
      selectedValueTextVariant: 'bodyLarge' as const,
      topBorderWidth: 1,
    }),
    []
  )

  return (
    <PressableAnimated
      bounceOnPress={false}
      accessibilityRole="button"
      onPress={onPress}
      disabled={!editable}
    >
      <Box
        paddingVertical={selectorStyles.paddingVertical}
        justifyContent="space-between"
        alignItems="center"
        flexDirection={flexDirection}
        borderTopWidth={selectorStyles.topBorderWidth}
        borderTopColor="dividers-regular"
        {...boxProps}
      >
        <Box
          flexShrink={1}
          maxWidth={isAccessibleFontScale ? undefined : '50%'}
        >
          <Text
            variant={selectorStyles.labelTextVariant}
            testID="Label"
            marginRight="s"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {label}
          </Text>
        </Box>
        <Text
          testID="Selected Value"
          style={{flex: 1}}
          textAlign="right"
          numberOfLines={1}
          variant={selectorStyles.selectedValueTextVariant}
          ellipsizeMode="tail"
          marginRight="xs"
        >
          {selectedValue}
        </Text>

        {editable ? (
          <Icon name="up-down" color="foregrounds-regular" size="s" />
        ) : null}
      </Box>
    </PressableAnimated>
  )
}
