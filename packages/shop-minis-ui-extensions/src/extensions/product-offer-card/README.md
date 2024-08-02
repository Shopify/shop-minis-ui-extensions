# ProductOfferCard

#### Overview
The `ProductOfferCard` component is designed to display a promotional or discount offer related to a product within a React Native application, utilizing the Shop Minis Platform SDK. It showcases product details such as the discounted price, original price, and an optional expiry date, along with an image of the product.

> **Info:**
This project is built using TypeScript, enhancing our code with static types for safer and more predictable development. TypeScript is ensuring that components and their props are well-defined.

#### Props
The component accepts the following props structured as `ProductOfferCardData`:

- **product** (`Product`): Information about the product. This object should conform to the `Product` type defined in your project.
- **order** (`Order`): Details about the order associated with the product. This object should conform to the `Order` type.
- **offer** (`object`): Details about the offer including:
  - **discountedPrice** (`Price`): The discounted price of the product.
  - **originalPrice** (`Price`): The original price of the product.
  - **variantId** (`string`, optional): The variant ID of the product, if applicable.
  - **title** (`string`, optional): The title of the offer.
  - **expiresAt** (`Date`, optional): The expiration date of the offer.
  - **image** (`Image`): An image representing the product or offer.

#### Usage
```jsx
import { ProductOfferCard } from '@shopify/shop-minis-ui-extensions'

...

<ProductOfferCard
  product={productDetails}
  order={orderDetails}
  offer={{
    discountedPrice: { amount: '19.99', currencyCode: 'USD' },
    originalPrice: { amount: '29.99', currencyCode: 'USD' },
    image: { uri: "path/to/product.jpg" },
    title: "Special Offer",
    expiresAt: new Date('2023-12-31')
  }}
/>
```

#### Dependencies

This component relies on the following external libraries:

- **React** (`react`): A JavaScript library for building user interfaces. Ensure you are using version 16.8 or higher due to hooks support.
- **Shopify Minis Platform SDK** (`@shopify/shop-minis-platform-sdk`): Provides the necessary SDK for integrating with Shopify's mini-apps platform. Version 1.2.3 or higher is recommended.

#### Example
```jsx
<ProductOfferCard
  product={{ id: '123', name: 'Awesome Product' }}
  order={{ id: '456', status: 'pending' }}
  offer={{
    discountedPrice: { amount: '15.00', currencyCode: 'USD' },
    originalPrice: { amount: '20.00', currencyCode: 'USD' },
    image: { uri: "https://example.com/product.jpg" },
    title: "Limited Time Offer",
    expiresAt: new Date('2023-12-31')
  }}
/>
```
| ![Example of Product Offer Card](../../assets/extensions/product-offer-card.png) |
|:-------------------------------------------------------------------------------:|
| *Product Offer Card Example*                                                    |

| ![Full example of Product Offer Card](../../assets/extensions/product-offer-card-full.png) |
|:----------------------------------------------------------------------------------------:|
| *Full Page Product Offer Card Example*                                                        |
