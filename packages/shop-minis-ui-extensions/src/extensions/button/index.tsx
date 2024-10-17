import {ComponentProps, useCallback} from 'react'
import {
  ExtensionProviders,
  ExtensionTarget,
  Button as SDKButton,
  useMinisParams,
} from '@shopify/shop-minis-platform-sdk'
import {useExtensionShopActions} from '@shopify/shop-minis-platform-sdk/actions'

type SDKButtonProps = ComponentProps<typeof SDKButton>

type ButtonProps = Omit<SDKButtonProps, 'onPress'> & {
  onPress?: SDKButtonProps['onPress']
}

// Try to fit the button in to it's context as much as possible
const TARGET_BUTTON_PROPS: Partial<
  Record<ExtensionTarget, Partial<SDKButtonProps>>
> = {
  'shop.product.policies.render-after': {
    variant: 'tertiary',
  },
  'shop.product.block.render': {
    variant: 'tertiary',
  },
  'shop.store.block.render': {
    variant: 'tertiary',
  },
  'shop.order-management.order-details.render-after': {
    variant: 'tertiary',
    size: 'l',
  },
  'shop.order-management.visit-shop.render-after': {
    variant: 'tertiary',
    size: 'l',
  },
}

export function Button({onPress, ...buttonProps}: ButtonProps) {
  const {openMiniViewer} = useExtensionShopActions()
  const {extensionContext} = useMinisParams()
  const target = extensionContext?.extensionTarget ?? null
  const baseProps = target ? TARGET_BUTTON_PROPS[target] ?? {} : {}

  const onPressHandler = useCallback(() => {
    openMiniViewer()
  }, [openMiniViewer])

  return (
    <ExtensionProviders>
      <SDKButton
        {...baseProps}
        {...buttonProps}
        onPress={onPress ?? onPressHandler}
      />
    </ExtensionProviders>
  )
}
