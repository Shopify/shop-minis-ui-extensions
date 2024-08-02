# Link

#### Overview
The `Link` component is designed to function as an interactive link within a React Native application, utilizing the Shop Minis Platform SDK. It displays text that, when pressed, triggers an event defined within the component.

#### Props
The component accepts the following prop:

- **actionText** (`string`): The text displayed on the link. This text is typically actionable and prompts the user to interact.

#### Usage
```jsx
import { Link } from '@shopify/shop-minis-ui-extensions'

...

<Link
  actionText="Click Here"
/>
```

#### Dependencies

This component relies on the following external libraries:

- **React** (`react`): A JavaScript library for building user interfaces. Ensure you are using version 16.8 or higher due to hooks support.
- **Shopify Minis Platform SDK** (`@shopify/shop-minis-platform-sdk`): Provides the necessary SDK for integrating with Shopify's mini-apps platform. Version 1.2.3 or higher is recommended.

#### Example
```jsx
<Link
  actionText="Action text"
/>
```
| ![Example of interactive Link](../../assets/extensions/link.png) |
|:--------------------------------------------------------------:|
| *Interactive Link Example*                                     |

| ![Full example of interactive Link](../../assets/extensions/link-full.png) |
|:------------------------------------------------------------------------:|
| *Interactive Link Full Page Example*                                          |
