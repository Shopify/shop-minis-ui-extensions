// Copied from Shop
// @ts-expect-error: file doesn't have types, and that's ok
import moduleMock from 'react-native-device-info/jest/react-native-device-info-mock'

moduleMock.getSystemVersion.mockReturnValue('12')
moduleMock.getVersion.mockReturnValue('1.2.3')
moduleMock.getUniqueIdSync.mockReturnValue('XXX-111-222')
moduleMock.getDeviceName.mockReturnValue('My Phone')
moduleMock.getModel.mockReturnValue('iPhone 11 Pro')
moduleMock.getBuildNumber.mockReturnValue('1')
moduleMock.getBundleId.mockReturnValue('com.shopify.arrive-dev')
moduleMock.getDeviceType.mockReturnValue('Handset')
moduleMock.getDeviceId.mockReturnValue('goldfish')
moduleMock.hasNotch.mockReturnValue(true)
moduleMock.hasDynamicIsland.mockReturnValue(false)
moduleMock.getBrand.mockReturnValue('Apple')
moduleMock.getManufacturer.mockReturnValue('Huawei')

export default moduleMock
