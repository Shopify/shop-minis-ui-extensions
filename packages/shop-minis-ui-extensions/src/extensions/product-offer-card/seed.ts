import {MINIS_TEST_STORE_DATA} from '../fixtures'

import type {ProductOfferCardData} from '.'

const data: ProductOfferCardData = {
  offer: {
    discountedPrice: {
      amount: '405.95',
      currencyCode: 'USD',
    },
    originalPrice: {
      amount: '605.95',
      currencyCode: 'USD',
    },
    title: 'Widget! Check this offer!',
    image: {
      url: 'https://cdn.shopify.com/s/files/1/0688/2233/5510/products/Main_9129b69a-0c7b-4f66-b6cf-c4222f18028a.jpg?v=1674664579',
    },
    variantId: 'gid://shopify/ProductVariant/43695240413206',
    expiresAt: new Date('2024-03-22T23:59:59.000Z'),
  },
  order: {
    id: 'gid://shopify/Order/123',
  },
  product: {
    id: 'gid://shopify/Product/7982542651414',
    shop: MINIS_TEST_STORE_DATA,
    title: 'Mr. Huebert Hydroxy Snowboard',
    image: {
      altText: null,
      url: 'https://cdn.shopify.com/s/files/1/0688/2233/5510/products/Main_9129b69a-0c7b-4f66-b6cf-c4222f18028a.jpg?v=1674664579',
    },
    price: {
      amount: '605.95',
      currencyCode: 'USD',
    },
    reviewsAverageRating: null,
    reviewsCount: 0,
  },
}

export default data
