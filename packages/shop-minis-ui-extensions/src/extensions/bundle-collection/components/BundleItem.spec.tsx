import {render, fireEvent} from '@testing-library/react-native'

import {BundleItem} from './BundleItem'

describe('BundleItem', () => {
  const mockProps = {
    title: 'Test Bundle',
    subtitle: 'Test Subtitle',
    imageUrls: ['image1.jpg', 'image2.jpg'],
    badgeText: 'New',
    actionButtonText: 'Add to Cart',
    onActionButtonPress: jest.fn(),
    uniqueItem: true,
  }

  it('renders the title and subtitle correctly', () => {
    const {getByText} = render(<BundleItem {...mockProps} />)
    expect(getByText('Test Bundle')).toBeTruthy()
    expect(getByText('Test Subtitle')).toBeTruthy()
  })

  it('renders the badge text correctly', () => {
    const {getByText} = render(<BundleItem {...mockProps} />)
    expect(getByText('New')).toBeTruthy()
  })

  it('renders the action button correctly', () => {
    const {getByText} = render(<BundleItem {...mockProps} />)
    expect(getByText('Add to Cart')).toBeTruthy()
  })

  it('calls the onActionButtonPress function when the button is pressed', () => {
    const {getByText} = render(<BundleItem {...mockProps} />)
    const button = getByText('Add to Cart')
    fireEvent.press(button)
    expect(mockProps.onActionButtonPress).toHaveBeenCalled()
  })

  it('renders the correct number of images', () => {
    const {getAllByTestId} = render(<BundleItem {...mockProps} />)
    const images = getAllByTestId('bundle-item-image')
    expect(images.length).toBe(2)
  })
})
