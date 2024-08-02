# VideoCollection

#### Overview
The `VideoCollection` component is designed to display a horizontal collection of videos within a React Native application, utilizing the Shop Minis Platform SDK. It is typically used to showcase videos related to products or other content. The component supports interactive elements, allowing users to view details about the products associated with each video.

> **Info:**
This project is built using TypeScript, enhancing our code with static types for safer and more predictable development. TypeScript ensures that components and their props are well-defined.

#### Props
The component accepts the following props structured as `VideoCollectionData`:

- **title** (`string`, optional): The title of the video collection. Defaults to 'Videos' if not provided.
- **items** (`VideoCollectionItemType[]`): An array of items where each item contains a video, related products, and other metadata.
  - **video** (`Video`): The main video to display.
  - **previewVideo** (`Video`, optional): A preview or alternative version of the video.
  - **fallbackImage** (`Image`): An image to display if the video cannot be loaded.
  - **relatedProducts** (`Array<{product?: Product, productVariantId?: string}>`): Products related to the video.
  - **externalId** (`string`): A unique identifier for external systems.

#### Usage
```jsx
import { VideoCollection } from '@shopify/shop-minis-ui-extensions'

...

<VideoCollection
  items={[
    {
      video: { uri: "path/to/video.mp4" },
      fallbackImage: { uri: "path/to/image.jpg" },
      relatedProducts: [{ product: { id: '123', name: 'Product Name' }, productVariantId: '12345' }],
      externalId: "001"
    }
  ]}
  title="Featured Videos"
/>
```

#### Dependencies

This component relies on the following external libraries:

- **React** (`react`): A JavaScript library for building user interfaces. Ensure you are using version 16.8 or higher due to hooks support.
- **Shopify Minis Platform SDK** (`@shopify/shop-minis-platform-sdk`): Provides the necessary SDK for integrating with Shopify's mini-apps platform. Version 1.2.3 or higher is recommended.

#### Example
```jsx
<VideoCollection
  items={[
    {
      video: { uri: "https://example.com/video.mp4" },
      fallbackImage: { uri: "https://example.com/fallback.jpg" },
      relatedProducts: [{ product: { id: '321', name: 'Awesome Product' }, productVariantId: '54321' }],
      externalId: "002"
    }
  ]}
  title="Video Collection Extension"
/>
```
| ![Example of VideoCollection](../../assets/extensions/video-collection.png) |
|:------------------------------------------------------------------------------:|
| *VideoCollection Example*                                                   |

| ![Full example of VideoCollection](../../assets/extensions/video-collection-full.png) |
|:---------------------------------------------------------------------------------------:|
| *Full Page VideoCollection Example*                                                       |
