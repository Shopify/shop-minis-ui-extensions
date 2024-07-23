import {useCallback} from 'react'
import {
  ExtensionSpacingProvider,
  PressableAnimated,
  Text,
} from '@shopify/shop-minis-platform-sdk'
import {useExtensionShopActions} from '@shopify/shop-minis-platform-sdk/actions'

export interface LinkData {
  actionText: string
}

export function Link({actionText}: LinkData) {
  const {openMiniViewer} = useExtensionShopActions()

  const onPressHandler = useCallback(async () => {
    openMiniViewer()
  }, [openMiniViewer])

  return (
    <ExtensionSpacingProvider>
      <PressableAnimated onPress={onPressHandler} accessibilityRole="link">
        <Text
          variant="buttonLarge"
          color="foregrounds-subdued"
          style={{
            textDecorationLine: 'underline',
            textAlign: 'center',
            width: '100%',
          }}
        >
          {actionText}
        </Text>
      </PressableAnimated>
    </ExtensionSpacingProvider>
  )
}
