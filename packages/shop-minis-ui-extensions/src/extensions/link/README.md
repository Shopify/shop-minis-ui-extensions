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
<div style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
<div style={{border: '1px solid', borderRadius: 16}}>
<img
src='../../assets/extensions/link.png'
title="Interactive Link Example"
alt="Example of interactive link"
loading="eager"
width="390"
style={{borderRadius: 16}}
/>
</div>
<br />
<div style={{border: '1px solid', borderRadius: 16, boxShadow: '5px 5px #888888'}}>
<img
src='../../assets/extensions/link-full.png'
title="Interactive Link Full Example"
alt="Full example of interactive link"
loading="eager"
width="390"
style={{borderRadius: 16}}
/>
</div>
</div>
