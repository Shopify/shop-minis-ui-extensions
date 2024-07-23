import {ExtensionTarget} from '@shopify/shop-minis-platform-sdk'

export function isStoreExtensionTarget(extensionTarget?: ExtensionTarget) {
  return extensionTarget?.startsWith('shop.store.')
}
