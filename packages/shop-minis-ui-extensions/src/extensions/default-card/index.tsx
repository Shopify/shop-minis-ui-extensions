import {useCallback} from 'react'
import {useExtensionShopActions} from '@shopify/shop-minis-platform-sdk/actions'
import {ExtensionSpacingProvider} from '@shopify/shop-minis-platform-sdk'

import {Image} from '../types'

import {DefaultCardView} from './components/DefaultCardView'

export interface DefaultCardData {
  title: string
  text: string
  actionText: string
  image: Image
}

export function DefaultCard({actionText, image, text, title}: DefaultCardData) {
  const {openMiniViewer} = useExtensionShopActions()

  const onPressHandler = useCallback(async () => {
    openMiniViewer()
  }, [openMiniViewer])

  return (
    <ExtensionSpacingProvider>
      <DefaultCardView
        image={image}
        title={title}
        text={text}
        actionText={actionText}
        onPress={onPressHandler}
      />
    </ExtensionSpacingProvider>
  )
}
