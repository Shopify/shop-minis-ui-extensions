# BundleProductsCarousel

#### Overview
The `BundleProductsCarousel` component is designed to display a carousel of product cards within a React Native application, utilizing the Shop Minis Platform SDK. This component is ideal for showcasing products that can be bundled together, allowing users to add or remove products from a bundle directly from the carousel. Each card in the carousel provides interactive elements for adding or removing products.

#### Props
The component accepts the following props:

- **products** (`ProductsCarouselProduct[]`): An array of products to be displayed in the carousel. Each product object includes details necessary for display and interaction.
- **shopId** (`string`): The identifier for the shop where the products are hosted.
- **onProductAddedToBundle** (`(product: ProductsCarouselProduct, variant: ProductsCarouselProductVariant) => void`): A callback function that is invoked when a product is added to the bundle.
- **onProductRemovedFromBundle** (`(product: ProductsCarouselProduct, variant: ProductsCarouselProductVariant) => void`): A callback function that is invoked when a product is removed from the bundle.
- **title** (`string`, optional): The title to be displayed above the carousel. Defaults to "Bundle and Save" if not provided.
- **subtitle** (`string`, optional): A subtitle to provide additional context or information about the products in the carousel.

#### Usage
```jsx
import { BundleProductsCarousel } from '@shopify/shop-minis-ui-extensions'

...

<BundleProductsCarousel
  title="Customize Your Bundle"
  subtitle="Select any two products and save 10%"
  products={[
    {
      id: "1",
      name: "Product 1",
      imageUrl: "path/to/image1.jpg",
      variants: [
        { id: "1-1", name: "Variant 1", price: "20.00" }
      ]
    },
    {
      id: "2",
      name: "Product 2",
      imageUrl: "path/to/image2.jpg",
      variants: [
        { id: "2-1", name: "Variant 2", price: "30.00" }
      ]
    }
  ]}
  shopId="shop123"
  onProductAddedToBundle={(product, variant) => console.log("Added", product, variant)}
  onProductRemovedFromBundle={(product, variant) => console.log("Removed", product, variant)}
/>
```

#### Dependencies

This component relies on the following external libraries:

- **React** (`react`): A JavaScript library for building user interfaces. Ensure you are using version 16.8 or higher due to hooks support.
- **Shopify Minis Platform SDK** (`@shopify/shop-minis-platform-sdk`): Provides the necessary SDK for integrating with Shopify's mini-apps platform. Version 1.2.3 or higher is recommended.
- **React Native** (`react-native`): A framework for building native apps using React.

#### Example
```jsx
<BundleProductsCarousel
  title="Explore Bundle Options"
  subtitle="Add items to your bundle and discover savings"
  products={[
    {
      id: "3",
      name: "Product 3",
      imageUrl: "https://example.com/image3.jpg",
      variants: [
        { id: "3-1", name: "Variant 3", price: "40.00" }
      ]
    },
    {
      id: "4",
      name: "Product 4",
      imageUrl: "https://example.com/image4.jpg",
      variants: [
        { id: "4-1", name: "Variant 4", price: "50.00" }
      ]
    }
  ]}
  shopId="shop456"
  onProductAddedToBundle={(product, variant) => console.log("Added", product, variant)}
  onProductRemovedFromBundle={(product, variant) => console.log("Removed", product, variant)}
/>
```

