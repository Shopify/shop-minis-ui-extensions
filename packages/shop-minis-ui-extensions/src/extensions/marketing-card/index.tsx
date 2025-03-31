import {useCallback} from 'react'
import {useExtensionShopActions} from '@shopify/shop-minis-platform-sdk/actions'
import {ExtensionProviders} from '@shopify/shop-minis-platform-sdk'

import {Image} from '../types'

import {MarketingCardView} from './components/MarketingCardView'
import {IconName} from './types'

export interface MarketingCardData {
  iconName: IconName
  actionText: string
  image: Image
}

export function MarketingCard({
  actionText,
  image,
  iconName,
}: MarketingCardData) {
  const {openMiniViewer} = useExtensionShopActions()

  const onPressHandler = useCallback(async () => {
    openMiniViewer()
  }, [openMiniViewer])

  return (
    <ExtensionProviders>
      <MarketingCardView
        image={image}
        iconName={iconName}
        actionText={actionText}
        onPress={onPressHandler}
      />
    </ExtensionProviders>
  )
}
