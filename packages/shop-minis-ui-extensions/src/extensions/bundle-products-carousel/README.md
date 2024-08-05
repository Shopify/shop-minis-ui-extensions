# BundleProductsCarousel

The `BundleProductsCarousel` component is designed to display a carousel of product cards within a React Native application, utilizing the Shop Minis Platform SDK. This component is ideal for showcasing products that can be bundled together, allowing users to add or remove products from a bundle directly from the carousel. Each card in the carousel provides interactive elements for adding or removing products.

| <img src="../../assets/extensions/bundle-products-carousel.png" alt="Example of BundleProductsCarousel" width="390" /> |
|:------------------------------------------------------------------------------:|
| *BundleProductsCarousel Example*                                                    |

### Example
```jsx
import { BundleProductsCarousel } from '@shopify/shop-minis-ui-extensions'

...
<BundleProductsCarousel
  title="Mix and Match"
  subtitle="Add items to your bundle and discover savings"
  products={products}
  shopId="shop456"
  onProductAddedToBundle={(product, variant) => console.log("Added", product, variant)}
  onProductRemovedFromBundle={(product, variant) => console.log("Removed", product, variant)}
/>
```

### Props
The component accepts the following props:

- **products** (`ProductsCarouselProduct[]`): An array of products to be displayed in the carousel. Each product object includes details necessary for display and interaction.
- **shopId** (`string`): The identifier for the shop where the products are hosted.
- **onProductAddedToBundle** (`(product: ProductsCarouselProduct, variant: ProductsCarouselProductVariant) => void`): A callback function that is invoked when a product is added to the bundle.
- **onProductRemovedFromBundle** (`(product: ProductsCarouselProduct, variant: ProductsCarouselProductVariant) => void`): A callback function that is invoked when a product is removed from the bundle.
- **title** (`string`, optional): The title to be displayed above the carousel. Defaults to "Bundle and Save" if not provided.
- **subtitle** (`string`, optional): A subtitle to provide additional context or information about the products in the carousel.


| <img src="../../assets/extensions/bundle-products-carousel-full.png" alt="Example of BundleProductsCarousel" width="390" /> |
|:----------------------------------------------------------------------------------------:|
| *BundleProductsCarousel in ProductPage * |
