# Button

A standard `Button` from the `shop-minis-platform-sdk`. It comes with some default styling for different targets but accepts all the same props as the SDK Button. If no `onPress` callback is provided, the button will open the Mini Viewer.

| <img src="../../assets/extensions/button.png" alt="Example of Button" width="390" /> |
|:--------------------------------------------------------------:|
| *Button*                                     |

### Example
```jsx
import { Button } from '@shopify/shop-minis-ui-extensions'

...

<Button
  text="Start a return"
  leftIcon="link"
  onPress={() => doSomething()}
/>
```

| <img src="../../assets/extensions/button-full.png" alt="Example of Button" width="390" /> |
|:------------------------------------------------------------------------:|
| *Button on the Order Management page*                                          |
