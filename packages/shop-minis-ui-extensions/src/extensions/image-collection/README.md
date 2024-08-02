# ImageCollection

#### Overview
The `ImageCollection` component is designed to display a collection of images in either a grid or carousel layout within a React Native application, utilizing the Shop Minis Platform SDK. It is typically used to showcase products related to images sourced from social media platforms like Instagram. The component supports interactive elements, allowing users to view details about the products associated with each image.

> **Info:**
This project is built using TypeScript, enhancing our code with static types for safer and more predictable development. TypeScript is ensuring that components and their props are well-defined.

#### Props
The component accepts the following props structured as `ImageCollectionData`:

- **items** (`ImageCollectionItem[]`): An array of items where each item contains an image, related products, and other metadata.
  - **image** (`Image`): The image to display.
  - **relatedProducts** (`Array<{product?: Product, productVariantId?: string}>`): Products related to the image.
  - **externalId** (`string`): A unique identifier for external systems.
  - **description** (`string`, optional): A description of the image.
  - **displayDate** (`Date`, optional): The date the image was displayed or posted.
- **title** (`string`, optional): The title of the image collection. Defaults to 'Shop our Instagram' if not provided.
- **layout** (`'GRID' | 'CAROUSEL'`): The layout type for displaying the image collection.

#### Usage
```jsx
import { ImageCollection } from '@shopify/shop-minis-ui-extensions'

...

<ImageCollection
  items={[
    {
      image: { uri: "path/to/image.jpg" },
      relatedProducts: [{ product: { id: '123', name: 'Product Name' }, productVariantId: '12345' }],
      externalId: "001",
      description: "A beautiful scene",
      displayDate: new Date('2023-01-01')
    }
  ]}
  title="Featured Collection"
  layout="GRID"
/>
```

#### Dependencies

This component relies on the following external libraries:

- **React** (`react`): A JavaScript library for building user interfaces. Ensure you are using version 16.8 or higher due to hooks support.
- **Shopify Minis Platform SDK** (`@shopify/shop-minis-platform-sdk`): Provides the necessary SDK for integrating with Shopify's mini-apps platform. Version 1.2.3 or higher is recommended.

#### Example
```jsx
<ImageCollection
  items={[
    {
      image: { uri: "https://example.com/image.jpg" },
      relatedProducts: [{ product: { id: '321', name: 'Awesome Product' }, productVariantId: '54321' }],
      externalId: "002",
      description: "Latest summer collection",
      displayDate: new Date('2023-04-25')
    }
  ]}
  title="Image Collection Extension"
  layout="CAROUSEL"
/>
```
<div style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
<div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
<div style={{border: '1px solid', borderRadius: 16, marginRight: 8}}>
<img
src='../../assets/extensions/image-collection.png'
title="Image Collection Example"
alt="Example of Image Collection"
loading="eager"
width="390"
style={{borderRadius: 16}}
/>
</div>
<div style={{border: '1px solid', borderRadius: 16, alignSelf: 'center'}}>
<img
src='../../assets/extensions/image-collection-carousel.png'
title="Image Collection Example"
alt="Example of Image Collection"
loading="eager"
width="390"
style={{borderRadius: 16}}
/>
</div>
</div>
<br />
<div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
<div style={{border: '1px solid', borderRadius: 16, boxShadow: '5px 5px #888888', marginRight: 8}}>
<img
src='../../assets/extensions/image-collection-full.png'
title="Full Image Collection Example"
alt="Full example of Image Collection"
loading="eager"
width="390"
style={{borderRadius: 16}}
/>
</div>
<div style={{border: '1px solid', borderRadius: 16, boxShadow: '5px 5px #888888'}}>
<img
src='../../assets/extensions/image-collection-carousel-full.png'
title="Full Image Collection Example"
alt="Full example of Image Collection"
loading="eager"
width="390"
style={{borderRadius: 16}}
/>
</div>
</div>
</div>
