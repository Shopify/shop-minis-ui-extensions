# DefaultCard

#### Overview
The `DefaultCard` component is designed to display a card view in a React Native application, utilizing the Shop Minis Platform SDK. It is used to present a title, text, an image, and an action button that triggers an event when pressed.

#### Props
The component accepts the following props:

- **title** (`string`): The title of the card.
- **text** (`string`): The description or content text displayed on the card.
- **actionText** (`string`): The text displayed on the action button.
- **image** (`Image`): An object representing the image to be displayed on the card. The `Image` type should be defined elsewhere in your project to specify the expected structure (e.g., `{ uri: string }`).

#### Usage
```jsx
import {DefaultCard} from '@shopify/shop-minis-ui-extensions'

...

<DefaultCard
  title="Sample Title"
  text="Sample text describing the content of the card."
  actionText="Click Me"
  image={{ uri: "path/to/image.jpg" }}
/>
```

#### Dependencies

This component relies on the following external libraries:

- **React** (`react`): A JavaScript library for building user interfaces. Ensure you are using version 16.8 or higher due to hooks support.
- **Shopify Minis Platform SDK** (`@shopify/shop-minis-platform-sdk`): Provides the necessary SDK for integrating with Shopify's mini-apps platform. Version 1.2.3 or higher is recommended.

#### Example
```jsx
<DefaultCard
  title="Default Card Extension"
  text="This is a default card extension. It can be used for different purposes."
  actionText="Action text"
  image={{ uri: "https://example.com/default-card.jpg" }}
/>
```
| ![Example of DefaultCard](../../assets/extensions/default-card.png) |
|:-------------------------------------------------------------:|
| *DefaultCard example*                                             |

| ![Example of DefaultCard](../../assets/extensions/default-card-full.png) |
|:------------------------------------------------------------------:|
| *Full Page DefaultCard example*                                                  |
