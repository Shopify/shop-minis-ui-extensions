import fetchMock from 'jest-fetch-mock'

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('react-native-reanimated/src/reanimated2/jestUtils').setUpTests()

fetchMock.enableMocks()

// Dependencies in node_modules sometimes throws warnings in tests which we
// can't controll. This function will silence them to provider a cleaner test result output

const globalConsoleWarning = global.console.warn

const warnings: string[] = ['ViewPropTypes will be removed from React Native.']

global.console.warn = message => {
  const shouldNotShowOutput = warnings.some(
    err => typeof message === 'string' && message.startsWith(err)
  )

  if (shouldNotShowOutput) return
  globalConsoleWarning(message)
}

jest.mock('react-native-gesture-handler/src/RNGestureHandlerModule', () =>
  require('react-native-gesture-handler/src/mocks')
)
jest.mock(
  'react-native-gesture-handler/lib/commonjs/RNGestureHandlerModule',
  () => require('react-native-gesture-handler/lib/commonjs/mocks')
)
jest.mock(
  'react-native-gesture-handler/lib/module/RNGestureHandlerModule',
  () => require('react-native-gesture-handler/lib/module/mocks')
)

jest.mock('react-native-share', () => ({
  __esModule: true,
  default: {
    open: jest.fn(),
  },
}))
