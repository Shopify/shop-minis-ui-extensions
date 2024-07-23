import {
  BundleSelectorItem,
  BundleSelectorOption,
  BundleSelectorOptionAvailability,
  PickerOption,
  PickerOptions,
  VariantAvailability,
} from './types'

/**
 * Find the selected option in the given item
 */
export const findSelectedOption = (item: BundleSelectorItem) =>
  item.options.find(option => option.selected) ?? null

/**
 * Find the items that do not have a selected option
 */
export const findItemsWithoutSelection = (items: BundleSelectorItem[]) =>
  items.filter(item => !findSelectedOption(item))

/**
 * Find the first selectable option in the given item
 */
export const findFirstSelectableOption = (item: BundleSelectorItem) =>
  item.options.find(option => option.availability === 'Available') ?? null

/**
 * Decide if we can show the image carousel for the given items
 */
export const shouldShowImages = (items: BundleSelectorItem[]) => {
  return items.every(item => {
    const anOptionIsSelected = Boolean(findSelectedOption(item))
    const optionsHaveImages = item.options.every(option => {
      return (
        typeof option.imageUrl === 'string' &&
        option.imageUrl.startsWith('https://')
      )
    })

    return anOptionIsSelected && optionsHaveImages
  })
}

/**
 * Take the current items and apply the given selection
 *
 * A new object is returned with the updated selection but items/options retain their references if unchanged
 */
export const applySelection = (
  items: BundleSelectorItem[],
  updatedItem: BundleSelectorItem,
  selectedTitle: string
) => {
  return items.map(item => {
    if (item !== updatedItem) return item

    const newItem: BundleSelectorItem = {
      ...item,
      options: item.options.map(option => {
        // Selected
        if (!option.selected && option.title === selectedTitle) {
          return {
            ...option,
            selected: true,
          }
        }

        // Deselected
        if (option.selected && option.title !== selectedTitle) {
          return {
            ...option,
            selected: false,
          }
        }

        // Unchanged
        return option
      }),
    }

    return newItem
  })
}

/**
 * Convert the bundle selector options to picker options
 *
 * We do this so partners can use a nicer API and we deal with the weird Shop-style API internally
 */
export const bundleSelectorOptionsToPickerOptions = (
  options: BundleSelectorOption[]
): PickerOptions => {
  return options.map(option => {
    const newOption: PickerOption = {
      availability: bundleSelectorOptionAvailabilityToVariantAvailability(
        option.availability
      ),
      imageUrl: option.imageUrl,
      selected: option.selected,
      name: option.title, // Does name matter?
      value: option.title,
    }

    return newOption
  })
}

/**
 * Convert from a simple union to the enum expected by the components we took from Shop
 */
export const bundleSelectorOptionAvailabilityToVariantAvailability = (
  availability: BundleSelectorOptionAvailability
): VariantAvailability => {
  if (availability === 'Unavailable') {
    return 0
  } else if (availability === 'SoldOut') {
    return 1
  }

  return 2
}

/**
 * Extract a unique key for the image carousel
 */
export const extractImageKey = (item: BundleSelectorItem, index: number) =>
  `BundleSelector-image-${item.title ?? 'untitled'}-${index}`
