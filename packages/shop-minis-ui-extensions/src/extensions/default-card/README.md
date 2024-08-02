# DefaultCard

The `DefaultCard` component is designed to display a card view in a React Native application, utilizing the Shop Minis Platform SDK. It is used to present a title, text, an image, and an action button that triggers an event when pressed.

#### Props
The component accepts the following props:

- **title** (`string`): The title of the card.
- **text** (`string`): The description or content text displayed on the card.
- **actionText** (`string`): The text displayed on the action button.
- **image** (`Image`): An object representing the image to be displayed on the card. The `Image` type should be defined elsewhere in your project to specify the expected structure (e.g., `{ uri: string }`).

#### Example
```jsx
import {DefaultCard} from '@shopify/shop-minis-ui-extensions'

...

<DefaultCard
  title="Default Card Extension"
  text="This is a default card extension. It can be used for different purposes."
  actionText="Action text"
  image={{ uri: "https://example.com/default-card.jpg" }}
/>
```
| <img src="../../assets/extensions/default-card.png" alt="Example of DefaultCard" width="390" /> |
|:-------------------------------------------------------------:|
| *DefaultCard example*                                             |

| <img src="../../assets/extensions/default-card-full.png" alt="Example of DefaultCard" width="390" /> |
|:------------------------------------------------------------------:|
| *Product Page DefaultCard example*                                                  |
