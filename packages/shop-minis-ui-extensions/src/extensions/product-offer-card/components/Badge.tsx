import {Box, Text, useTheme} from '@shopify/shop-minis-platform-sdk'

export interface BadgeProps {
  text: string
}

export const Badge = ({text}: BadgeProps) => {
  const {spacing} = useTheme()

  return (
    <Box alignSelf="center" minWidth={spacing.s} borderRadius="xs" accessible>
      <Box
        backgroundColor="backgrounds-dangerous"
        paddingVertical="xxxs"
        paddingHorizontal="xxs"
        borderRadius="xs"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        testID="badgeBox"
      >
        <Text
          variant="badgeBold"
          maxFontSizeMultiplier={1.5}
          color="backgrounds-regular"
        >
          {text}
        </Text>
      </Box>
    </Box>
  )
}
