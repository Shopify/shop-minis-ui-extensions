import {StatusBar} from 'react-native'
import {Box, Text, SafeAreaView} from '@shopify/shop-minis-platform-sdk'

export function App() {
  return (
    <Box flex={1} backgroundColor="backgrounds-regular">
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <Text textAlign="center">Fill in the blank</Text>
      </SafeAreaView>
    </Box>
  )
}
