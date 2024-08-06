import {Text, Button} from '@shopify/shop-minis-platform-sdk'

import {SurveyCompletedViewProps} from '../types'

export function SurveyCompletedView({onRestart}: SurveyCompletedViewProps) {
  return (
    <>
      <Text textAlign="center" variant="bodyLarge" color="foregrounds-subdued">
        Thank you for your response!
      </Text>
      <Button text="Restart survey" variant="borderless" onPress={onRestart} />
    </>
  )
}
