import {CurrencyCode} from '@shopify/shop-minis-platform-sdk'

import {ProductsCarouselProduct} from './components/ProductsCarouselCard'

const DEFAULT_VARIANT = {
  __typename: 'ProductVariant' as const,
  id: 'gid://shopify/ProductVariant/43695288975382',
  title: 'Default Title',
  isFavorited: true,
  price: {
    __typename: 'Money' as const,
    amount: '702.95',
    currencyCode: CurrencyCode.USD,
  },
  availableForSale: true,
  currentlyNotInStock: false,
  selectedOptions: [
    {name: 'Size', value: 'S'},
    {name: 'Color', value: 'Green'},
  ],
  image: {
    __typename: 'Image' as const,
    id: 'gid://shopify/ProductImage/39774118445078',
    altText: null,
    url: 'https://cdn.shopify.com/s/files/1/0688/2233/5510/products/Main_0a4e9096-021a-4c1e-8750-24b233166a12_990x.jpg?v=1671633756',
  },
}

const FIXTURE_VARIANT_1: ProductsCarouselProduct['defaultVariant'] = {
  __typename: 'ProductVariant' as const,
  id: 'gid://shopify/ProductVariant/7982547763222',
  title: 'Default Title',
  isFavorited: false,
  availableForSale: true,
  currentlyNotInStock: false,
  selectedOptions: [
    {name: 'Size', value: 'S'},
    {name: 'Color', value: 'Red'},
  ],
  compareAtPrice: {
    __typename: 'Money' as const,
    amount: '702.00',
    currencyCode: CurrencyCode.USD,
  },
  price: {
    __typename: 'Money' as const,
    amount: '601.95',
    currencyCode: CurrencyCode.USD,
  },
  image: {
    __typename: 'Image' as const,
    id: 'gid://shopify/ProductImage/39774118445078',
    altText: null,
    url: 'https://cdn.shopify.com/s/files/1/0688/2233/5510/products/Main_9129b69a-0c7b-4f66-b6cf-c4222f18028a_990x.jpg?v=1671634025',
  },
} as const

export const FIXTURE_PRODUCT: ProductsCarouselProduct = {
  __typename: 'Product',
  id: 'gid://shopify/Product/7922581602559',
  title: 'The Hero Snowboard',
  featuredImage: {
    __typename: 'Image',
    id: 'gid://shopify/ProductImage/39774118445078',
    altText: null,
    url: 'https://cdn.shopify.com/s/files/1/0688/2233/5510/products/Main_0a4e9096-021a-4c1e-8750-24b233166a12_990x.jpg?v=1671633756',
  },
  options: [
    {
      name: 'Color',
      values: ['Red', 'Blue', 'Green'],
    },
    {
      name: 'Size',
      values: ['S', 'M', 'L'],
    },
  ],
  // defaultVariant: DEFAULT_VARIANT,
  // variants: [
  //   FIXTURE_VARIANT_1,
  defaultVariant: FIXTURE_VARIANT_1,
  variants: [
    DEFAULT_VARIANT,
    {
      ...DEFAULT_VARIANT,
      selectedOptions: [
        {
          name: 'Color',
          value: 'Green',
        },
        {
          name: 'Size',
          value: 'M',
        },
      ],
    },
    {
      ...DEFAULT_VARIANT,
      selectedOptions: [
        {
          name: 'Color',
          value: 'Green',
        },
        {
          name: 'Size',
          value: 'L',
        },
      ],
    },
    {
      ...FIXTURE_VARIANT_1,
      selectedOptions: [
        {
          name: 'Color',
          value: 'Red',
        },
        {
          name: 'Size',
          value: 'L',
        },
      ],
    },
  ],
}

export const FIXTURE_SHOP_GID = '62104633599'

export const FIXTURE_PRODUCTS = [
  FIXTURE_PRODUCT,
  FIXTURE_PRODUCT,
  FIXTURE_PRODUCT,
]
