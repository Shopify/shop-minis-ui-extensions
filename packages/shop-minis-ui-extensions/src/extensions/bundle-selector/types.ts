import {ComponentProps} from 'react'
import {VariantOptionsModal} from '@shopify/shop-minis-platform-sdk/src/components/VariantPicker/components/VariantOptionsModal'

export type PickerOptions = ComponentProps<
  typeof VariantOptionsModal
>['pickerOptions']
export type PickerOption = PickerOptions[number]
export type VariantAvailability = PickerOptions[number]['availability']

export type BundleSelectorOptionAvailability =
  | 'Available'
  | 'SoldOut'
  | 'Unavailable'

export interface BundleSelectorOption {
  title: string
  value: string
  imageUrl?: string
  selected: boolean
  availability: BundleSelectorOptionAvailability
}

export interface BundleSelectorItem {
  title: string
  options: BundleSelectorOption[]
}

export interface BundleSelectorProps {
  items: BundleSelectorItem[]
  onChange: (items: BundleSelectorItem[]) => void
  onPressImage?: (
    item: BundleSelectorItem,
    selectedOption: BundleSelectorOption
  ) => void
}
