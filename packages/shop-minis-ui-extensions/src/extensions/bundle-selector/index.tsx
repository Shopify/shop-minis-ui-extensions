import {useCallback, useMemo, useEffect} from 'react'
import {
  Box,
  Text,
  useSheet,
  Shelf,
  PressableAnimated,
  ExtensionProviders,
} from '@shopify/shop-minis-platform-sdk'
import {VariantOptionsModal} from '@shopify/shop-minis-platform-sdk/src/components/VariantPicker/components/VariantOptionsModal'

import {BundleSelectorItem, BundleSelectorProps} from './types'
import {Selector} from './components/Selector'
import {ImageCard} from './components/ImageCard'
import {
  applySelection,
  bundleSelectorOptionsToPickerOptions,
  extractImageKey,
  findFirstSelectableOption,
  findItemsWithoutSelection,
  findSelectedOption,
  shouldShowImages,
} from './utils'

/**
 * BundleSelector is a component used to display and customize product bundles
 *
 * The BundleSelector displays a list of items. Each item shows the item's title and the value of its selected option.
 * When an item is pressed, a sheet is shown to select an option for that item.
 *
 * If all items have an image URL for their selected option, a carousel of images is shown above the items.
 * The images in the carousel are pressable if an `onPressImage` function is provided.
 *
 * @component
 * @example
 * <BundleSelector
 *   items={items}
 *   onChange={setItems}
 *   onPressImage={(item, selectedOption) => console.log(item, selectedOption)}
 * />
 *
 * @param items - An array of `BundleSelectorItem`s. Each item has a title and options.
 * @param onChange - A callback function that is invoked when the selected option for any item changes.
 * The function receives the updated items array as its argument. You must update `items` in your component state.
 * @param onPressImage - An optional callback function that is invoked when an image in the carousel is pressed.
 * The function receives the pressed item and its selected option as its arguments.
 */
export function BundleSelector({
  items,
  onChange,
  onPressImage,
}: BundleSelectorProps) {
  const showSheet = useSheet()
  const showImages = useMemo(() => shouldShowImages(items), [items])

  const onSelectedOptionChange = useCallback(
    (updatedItem: BundleSelectorItem, selectedValue: string) => {
      onChange(applySelection(items, updatedItem, selectedValue))
    },
    [items, onChange]
  )

  // Ensure all items have a selection
  useEffect(() => {
    const itemsWithoutSelection = findItemsWithoutSelection(items)

    if (itemsWithoutSelection.length === 0) return

    const newItems = itemsWithoutSelection.reduce(
      (inProgress, itemWithoutSelection) => {
        const selectedOption = findFirstSelectableOption(itemWithoutSelection)

        if (!selectedOption) return inProgress

        return applySelection(
          inProgress,
          itemWithoutSelection,
          selectedOption.title
        )
      },
      items
    )

    const newItemsWithoutSelection = findItemsWithoutSelection(newItems)

    // Ensure the new items have a selection, if not we failed
    if (newItemsWithoutSelection.length > 0) {
      console.warn(
        `Could not find a selection for the following items: ${newItemsWithoutSelection
          .map(item => item.title)
          .join(', ')}`
      )

      // Return early to prevent infinite loops
      return
    }

    onChange(newItems)
  }, [items, onChange])

  const handleItemPress = useCallback(
    (item: BundleSelectorItem) => {
      showSheet(
        dismiss => (
          <VariantOptionsModal
            onDismissModal={dismiss}
            onSelectedOptionChange={({value}) =>
              onSelectedOptionChange(item, value)
            }
            pickerOptions={bundleSelectorOptionsToPickerOptions(item.options)}
          />
        ),
        {
          HeaderComponent: () => (
            <Text variant="sectionTitle">{item.title}</Text>
          ),
        }
      )
    },
    [onSelectedOptionChange, showSheet]
  )

  const renderImageItem = useCallback(
    ({item}: {item: BundleSelectorItem}) => {
      const selectedOption = findSelectedOption(item)

      if (!selectedOption) return null

      return (
        <PressableAnimated
          onPress={() => onPressImage?.(item, selectedOption)}
          disabled={!onPressImage}
        >
          <ImageCard
            uri={selectedOption.imageUrl}
            title={selectedOption.title}
          />
        </PressableAnimated>
      )
    },
    [onPressImage]
  )

  return (
    <ExtensionProviders>
      <Box marginBottom="s">
        <Text variant="bodyTitleLarge">What&apos;s included</Text>
      </Box>

      {showImages ? (
        <Box marginHorizontal="-gutter" marginBottom="s">
          <Shelf
            data={items}
            renderItem={renderImageItem}
            keyExtractor={extractImageKey}
            windowSize={2}
          />
        </Box>
      ) : null}

      {items.map((item, index) => {
        // If there's nothing for the user to change and we are showing images we don't need to show the item
        // This matches how Shop handles this case
        if (item.options.length === 1 && showImages) return null

        return (
          <Selector
            key={item.title!}
            label={item.title!}
            selectedValue={item.options.find(option => option.selected)?.title}
            onPress={() => handleItemPress(item)}
            editable={item.options.length > 1}
            // Cheeky hack to remove bottom padding from last item to sit nicer with the quantity picker
            // on the PDP which has it's own top padding
            paddingBottom={index === items.length - 1 ? 'none' : undefined}
          />
        )
      })}
    </ExtensionProviders>
  )
}
