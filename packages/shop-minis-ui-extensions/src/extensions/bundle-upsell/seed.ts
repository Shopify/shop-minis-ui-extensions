import {MINIS_TEST_STORE_DATA} from '../fixtures'

import type {BundleUpsellData} from '.'

const data: BundleUpsellData = {
  bundles: [
    {
      product: {
        id: 'gid://shopify/Product/8343768334591',
        shop: MINIS_TEST_STORE_DATA,
        title: 'Mix and match bundle',
        image: {
          altText: null,
          url: 'https://cdn.shopify.com/s/files/1/0621/0463/3599/files/triple-toy__73728.jpg?v=1709640753&width=1769',
        },
        price: {
          amount: '200.00',
          currencyCode: 'USD',
        },
        compareAtPrice: {
          amount: '300.00',
          currencyCode: 'USD',
        },
        reviewsAverageRating: null,
        reviewsCount: 0,
      },
      childProducts: [
        {
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
      ],
    },
    {
      product: {
        id: 'gid://shopify/Product/7982542651414',
        shop: MINIS_TEST_STORE_DATA,
        title: 'Mix and match bundle',
        image: {
          altText: null,
          url: 'https://cdn.shopify.com/s/files/1/0688/2233/5510/products/Main_9129b69a-0c7b-4f66-b6cf-c4222f18028a.jpg?v=1674664579',
        },
        price: {
          amount: '20.00',
          currencyCode: 'USD',
        },
        compareAtPrice: {
          amount: '30.00',
          currencyCode: 'USD',
        },
        reviewsAverageRating: null,
        reviewsCount: 0,
      },
      childProducts: [
        {
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
      ],
    },
    {
      product: {
        id: 'gid://shopify/Product/7982528397334',
        shop: MINIS_TEST_STORE_DATA,
        title: 'Mix and match bundle',
        image: {
          altText: null,
          url: 'https://cdn.shopify.com/s/files/1/0688/2233/5510/products/Main_9129b69a-0c7b-4f66-b6cf-c4222f18028a.jpg?v=1674664579',
        },
        price: {
          amount: '200.00',
          currencyCode: 'USD',
        },
        reviewsAverageRating: null,
        reviewsCount: 0,
      },
      childProducts: [
        {
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
      ],
    },
  ],
  title: 'Bundle upsell',
}

export default data
