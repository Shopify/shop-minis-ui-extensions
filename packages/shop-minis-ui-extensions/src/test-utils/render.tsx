import {render} from '@testing-library/react-native'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {ThemeProvider, theme} from '@shopify/shop-minis-platform-sdk'

function customRender<T>(ui: React.ReactElement<T>) {
  const Providers = ({children}: {children: React.ReactElement}) => {
    return (
      <GestureHandlerRootView>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </GestureHandlerRootView>
    )
  }

  return render(ui, {wrapper: Providers})
}

// eslint-disable-next-line no-restricted-imports
export * from '@testing-library/react-native'

export {customRender as render}
