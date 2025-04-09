import {CurrencyCode} from '@shopify/shop-minis-platform-sdk'

import {ProductsCarouselProduct} from './components/ProductsCarouselCard'

const FIXTURE_VARIANT_BASE = {
  __typename: 'ProductVariant' as const,
  title: 'Default Title',
  isFavorited: false,
  availableForSale: true,
  currentlyNotInStock: false,
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
}

const DEFAULT_VARIANT = {
  ...FIXTURE_VARIANT_BASE,
  id: 'gid://shopify/ProductVariant/43695288975382',
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
  variantImage: {
    __typename: 'StorefrontVariantImage' as const,
    id: 'gid://shopify/ProductImage/39774118445078',
    image: {
      __typename: 'Image' as const,
      altText: null,
      url: 'https://cdn.shopify.com/s/files/1/0688/2233/5510/products/Main_0a4e9096-021a-4c1e-8750-24b233166a12_990x.jpg?v=1671633756',
    },
  },
}

const FIXTURE_VARIANT_1: ProductsCarouselProduct['defaultVariant'] = {
  ...FIXTURE_VARIANT_BASE,
  id: 'gid://shopify/ProductVariant/7982547763222',
  variantImage: {
    __typename: 'StorefrontVariantImage' as const,
    id: 'gid://shopify/ProductImage/39774118445078',
    image: {
      __typename: 'Image' as const,
      altText: null,
      url: 'https://cdn.shopify.com/s/files/1/0688/2233/5510/products/Main_9129b69a-0c7b-4f66-b6cf-c4222f18028a_990x.jpg?v=1671634025',
    },
  },
  selectedOptions: [
    {name: 'Size', value: 'S'},
    {name: 'Color', value: 'Red'},
  ],
  image: {
    id: 'gid://shopify/ProductImage/39774118445078',
    altText: null,
    url: 'https://cdn.shopify.com/s/files/1/0688/2233/5510/products/Main_9129b69a-0c7b-4f66-b6cf-c4222f18028a_990x.jpg?v=1671634025',
  },
} as const

const FIXTURE_VARIANT_2: ProductsCarouselProduct['defaultVariant'] = {
  ...FIXTURE_VARIANT_BASE,
  id: 'gid://shopify/ProductVariant/7982547763223',
  variantImage: {
    __typename: 'StorefrontVariantImage' as const,
    id: 'gid://shopify/ProductImage/39774118445078',
    image: {
      __typename: 'Image' as const,
      altText: null,
      url: 'https://cdn.shopify.com/s/files/1/0688/2233/5510/products/Main_9129b69a-0c7b-4f66-b6cf-c4222f18028a_990x.jpg?v=1671634025',
    },
  },
  selectedOptions: [
    {name: 'Size', value: 'M'},
    {name: 'Color', value: 'Red'},
  ],
  image: {
    id: 'gid://shopify/ProductImage/39774118445078',
    altText: null,
    url: 'https://cdn.shopify.com/s/files/1/0688/2233/5510/products/Main_9129b69a-0c7b-4f66-b6cf-c4222f18028a_990x.jpg?v=1671634025',
  },
} as const

const FIXTURE_VARIANT_3: ProductsCarouselProduct['defaultVariant'] = {
  ...FIXTURE_VARIANT_BASE,
  id: 'gid://shopify/ProductVariant/7982547763224',
  selectedOptions: [
    {name: 'Size', value: 'L'},
    {name: 'Color', value: 'Green'},
  ],
  variantImage: {
    __typename: 'StorefrontVariantImage' as const,
    id: 'gid://shopify/ProductImage/39774118445078',
    image: {
      __typename: 'Image' as const,
      altText: null,
      url: 'https://cdn.shopify.com/s/files/1/0688/2233/5510/products/Main_0a4e9096-021a-4c1e-8750-24b233166a12_990x.jpg?v=1671633756',
    },
  },
  image: {
    id: 'gid://shopify/ProductImage/39774118445078',
    altText: null,
    url: 'https://cdn.shopify.com/s/files/1/0688/2233/5510/products/Main_0a4e9096-021a-4c1e-8750-24b233166a12_990x.jpg?v=1671633756',
  },
} as const

export const FIXTURE_PRODUCT: ProductsCarouselProduct = {
  id: 'gid://shopify/Product/7922581602559',
  title: 'The Hero Snowboard',
  featuredImage: {
    id: 'gid://shopify/ProductImage/39774118445078',
    altText: null,
    url: 'https://cdn.shopify.com/s/files/1/0688/2233/5510/products/Main_0a4e9096-021a-4c1e-8750-24b233166a12_990x.jpg?v=1671633756',
  },
  options: [
    {
      name: 'Color',
      values: ['Red', 'Green'],
    },
    {
      name: 'Size',
      values: ['S', 'M', 'L'],
    },
  ],
  defaultVariant: DEFAULT_VARIANT,
  variants: [
    DEFAULT_VARIANT,
    FIXTURE_VARIANT_1,
    FIXTURE_VARIANT_2,
    FIXTURE_VARIANT_3,
  ],
}

const FIXTURE_PRODUCT_2: ProductsCarouselProduct = {
  ...FIXTURE_PRODUCT,
  id: 'gid://shopify/Product/7922581602559-2',
  title: 'The Hero Snowboard 2',
  featuredImage: {
    id: 'gid://shopify/ProductImage/39774118445078',
    altText: null,
    url: 'https://cdn.shopify.com/s/files/1/0688/2233/5510/products/Main_0a4e9096-021a-4c1e-8750-24b233166a12_990x.jpg?v=1671633756',
  },
}

const FIXTURE_PRODUCT_3: ProductsCarouselProduct = {
  ...FIXTURE_PRODUCT,
  id: 'gid://shopify/Product/7922581602559-3',
  title: 'The Hero Snowboard 3',
  featuredImage: {
    id: 'gid://shopify/ProductImage/39774118445078',
    altText: null,
    url: 'https://cdn.shopify.com/s/files/1/0688/2233/5510/products/Main_0a4e9096-021a-4c1e-8750-24b233166a12_990x.jpg?v=1671633756',
  },
}

export const FIXTURE_SHOP_GID = '62104633599'

export const FIXTURE_PRODUCTS = [
  FIXTURE_PRODUCT,
  FIXTURE_PRODUCT_2,
  FIXTURE_PRODUCT_3,
]
