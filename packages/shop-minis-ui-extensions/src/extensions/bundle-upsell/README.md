# BundleUpsell

#### Overview
The `BundleUpsell` component is designed to display a horizontal carousel of product bundle cards within a React Native application, utilizing the Shop Minis Platform SDK. This component is ideal for promoting product bundles, allowing users to navigate directly to product details by interacting with the cards. Each card in the carousel showcases a main product and may include additional child products as part of the bundle.

#### Props
The component accepts the following props structured as `BundleUpsellData`:

- **bundles** (`BundleItem[]`): An array of `BundleItem` objects, each representing a product bundle. Each `BundleItem` includes:
  - **product** (`Product`): The main product in the bundle.
  - **childProducts** (`Product[]`): An array of additional products included in the bundle.
- **title** (`string`, optional): The title to be displayed above the bundle carousel. Defaults to "Bundle and save" if not provided.

#### Usage
```jsx
import { BundleUpsell } from './path/to/BundleUpsell'

...

<BundleUpsell
  title="Explore Our Exclusive Bundles"
  bundles={[
    {
      product: { id: "1", name: "Main Product", description: "Description here", imageUrl: "path/to/image.jpg" },
      childProducts: [
        { id: "2", name: "Child Product 1", description: "Description here", imageUrl: "path/to/image.jpg" }
      ]
    }
  ]}
/>
```

#### Dependencies

This component relies on the following external libraries:

- **React** (`react`): A JavaScript library for building user interfaces. Ensure you are using version 16.8 or higher due to hooks support.
- **Shopify Minis Platform SDK** (`@shopify/shop-minis-platform-sdk`): Provides the necessary SDK for integrating with Shopify's mini-apps platform. Version 1.2.3 or higher is recommended.

#### Example
```jsx
<BundleUpsell
  title="Bundle and Save Big!"
  bundles={[
    {
      product: { id: "101", name: "Premium Coffee Maker", description: "Brews the perfect cup every time.", imageUrl: "https://example.com/coffee-maker.jpg" },
      childProducts: [
        { id: "102", name: "Coffee Filter Pack", description: "High-quality filters.", imageUrl: "https://example.com/filters.jpg" }
      ]
    }
  ]}
/>
```

#### Rendering Note:
This component uses a `ReanimatedFlatList` to render a smooth and efficient horizontal carousel. The `snapToOffsets` property ensures that the carousel snaps to each card, enhancing the user experience by providing a clean and controlled scroll behavior.
