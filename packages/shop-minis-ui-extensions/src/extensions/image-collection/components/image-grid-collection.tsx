import {useMemo} from 'react'
import {useWindowDimensions} from 'react-native'
import chunk from 'lodash/chunk'
import {Box, useTheme} from '@shopify/shop-minis-platform-sdk'

import type {ImageCollectionItem} from '..'

import {ImageUnit} from './image-unit'

const GRID_BORDER_RADIUS = 12

interface ImageGridCollectionProps {
  items: ImageCollectionItem[]
  onImagePress: (item: ImageCollectionItem) => void
}

export function ImageGridCollection({
  items,
  onImagePress,
}: ImageGridCollectionProps) {
  let itemsPerRow = 3
  let limit = 9

  if (items.length < 4) {
    limit = 1
    itemsPerRow = 1
  } else if (items.length < 6) {
    itemsPerRow = 2
    limit = 4
  } else if (items.length < 9) {
    limit = 6
  }

  const {width, height} = useImageSize(itemsPerRow)
  const chunkedImages = chunk(items.slice(0, limit), itemsPerRow)
  const lastRowIndex = chunkedImages.length - 1

  const getBorderStyles = (row: number, col: number) => {
    const isTopLeft = row === 0 && col === 0
    const isTopRight = row === 0 && col === itemsPerRow - 1
    const isBottomLeft = row === lastRowIndex && col === 0
    const isBottomRight = row === lastRowIndex && col === itemsPerRow - 1

    return {
      borderTopLeftRadius: isTopLeft ? GRID_BORDER_RADIUS : undefined,
      borderTopRightRadius: isTopRight ? GRID_BORDER_RADIUS : undefined,
      borderBottomLeftRadius: isBottomLeft ? GRID_BORDER_RADIUS : undefined,
      borderBottomRightRadius: isBottomRight ? GRID_BORDER_RADIUS : undefined,
    }
  }

  return (
    <Box gap="xxxs">
      {chunkedImages.map((imagesRow, index) => {
        return (
          <Box
            // Using index is better for flashlist
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            flexDirection="row"
            flexWrap="nowrap"
            gap="xxxs"
            justifyContent="flex-start"
            height={height}
          >
            {imagesRow.map((item, colIndex) => (
              // Using index is better for flashlist
              // eslint-disable-next-line react/no-array-index-key
              <Box key={colIndex}>
                <ImageUnit
                  item={item}
                  width={width}
                  height={height}
                  onPress={onImagePress}
                  style={getBorderStyles(index, colIndex)}
                />
              </Box>
            ))}
          </Box>
        )
      })}
    </Box>
  )
}

function useImageSize(itemsPerRow: number) {
  const {width} = useWindowDimensions()
  const theme = useTheme()

  const gutter = theme.spacing.gutter * 2
  const spacing = theme.spacing.xxxs * (itemsPerRow - 1)
  const size = (width - gutter - spacing) / itemsPerRow

  return useMemo(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  )
}
