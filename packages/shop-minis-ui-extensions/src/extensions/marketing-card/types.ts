import {AVAILABLE_ICONS} from '@shopify/shop-minis-platform-sdk'

type IconName = Exclude<(typeof AVAILABLE_ICONS)[number], undefined | number>

export {IconName}
