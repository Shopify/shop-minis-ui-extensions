# BundleCollection

#### Overview
The `BundleCollection` component is designed to display a carousel of product bundle cards within a React Native application, utilizing the Shop Minis Platform SDK. Each card in the carousel showcases details such as the bundle's title, subtitle, images, a badge, and an action button. This component is ideal for promoting various product bundles in an engaging and interactive manner.

#### Props
The component accepts the following props structured as `BundleUpsellData`:

- **bundles** (`BundleItem[]`): An array of `BundleItem` objects, each representing a product bundle. Each `BundleItem` includes:
  - **title** (`string`): The title of the bundle.
  - **subtitle** (`string`, optional): A subtitle for additional details.
  - **images** (`string[]`): An array of image URLs for the bundle.
  - **badgeText** (`string`, optional): Text for a badge to highlight special information.
  - **actionButtonText** (`string`): Text for the action button on the card.
  - **actionCallback** (`() => void`): A callback function that is invoked when the action button is pressed.
- **title** (`string`, optional): The title to be displayed above the bundle carousel. Defaults to "Mix and match" if not provided.

#### Usage
```jsx
import { BundleCollection } from '@shopify/shop-minis-ui-extensions'

...

<BundleCollection
  title="Explore Our Bundles"
  bundles={[
    {
      title: "Winter Essentials",
      subtitle: "Everything you need for the cold season",
      images: ["path/to/image1.jpg", "path/to/image2.jpg"],
      badgeText: "20% Off",
      actionButtonText: "View Bundle",
      actionCallback: () => console.log("Bundle selected")
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
<BundleCollection
  title="Mix and Match"
  bundles={[
    {
      title: "Mix and match bundle",
      subtitle: "Add a t-shirt and save 25%",
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg",
        "https://example.com/image4.jpg"
      ],
      badgeText: "Save 25%",
      actionButtonText: "Add to bundle",
      actionCallback: () => console.log("Bundle selected")
    }
  ]}
/>
```
| ![Example of Bundle Collection](../../assets/extensions/bundle-collection.png) |
|:------------------------------------------------------------------------------:|
| *Bundle Collection Example*                                                    |

| ![Full example of Bundle Collection](../../assets/extensions/bundle-collection-full.png) |
|:----------------------------------------------------------------------------------------:|
| *Full Bundle Collection Example*                                                         |
