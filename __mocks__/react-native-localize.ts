import type * as RNLocalize from 'react-native-localize'

const findBestLanguageTag: typeof RNLocalize.findBestLanguageTag<
  string
> = () => ({
  languageTag: 'en',
  isRTL: false,
})

const getLocales: typeof RNLocalize.getLocales = () => [
  {countryCode: 'CA', languageTag: 'en', languageCode: 'en', isRTL: false},
  {countryCode: 'FR', languageTag: 'fr', languageCode: 'fr', isRTL: false},
]

const RNLocalizeMock = jest.requireActual('react-native-localize/mock')

const mock = {
  ...RNLocalizeMock,
  findBestLanguageTag,
  getLocales,
}

module.exports = {
  __esModule: true,
  ...mock,
  default: mock,
}
