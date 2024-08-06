import {useState, useCallback, useMemo} from 'react'
import {
  Box,
  Text,
  ExtensionProviders,
  MultipleChoice,
} from '@shopify/shop-minis-platform-sdk'

import {CHOICES} from './seed'
import {SurveyCompletedView} from './components/SurveyCompletedView'
import {ChoiceOption, SurveySingleResponseProps} from './types'

const MAX_CHOICES = 5
const SURVEY_COMPLETION_DELAY = 500 // milliseconds

const DEFAULT_OTHER_OPTION: ChoiceOption = {
  label: 'Other ...',
  value: 'other',
}

export function SurveySingleResponse({
  onChoiceSelected,
  title = 'How did you find about us?',
  subtitle,
  otherOption = DEFAULT_OTHER_OPTION,
}: SurveySingleResponseProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>()
  const [surveyCompleted, setSurveyCompleted] = useState(false)

  const filteredChoices = useMemo(
    () => CHOICES.slice(0, MAX_CHOICES - 1).concat(otherOption),
    [otherOption]
  )

  const handleChoiceSelection = useCallback(
    (index: number, value: string | number) => {
      setSelectedIndex(prevIndex => (prevIndex === index ? undefined : index))
      onChoiceSelected(index, value)
      setTimeout(() => setSurveyCompleted(true), SURVEY_COMPLETION_DELAY)
    },
    [onChoiceSelected]
  )

  const resetSurvey = useCallback(() => {
    setSurveyCompleted(false)
    setSelectedIndex(undefined)
  }, [])

  return (
    <ExtensionProviders>
      <Box marginTop="m">
        <Text variant="sectionTitle">{title}</Text>
        {subtitle ? (
          <Text variant="bodySmall" color="foregrounds-subdued">
            {subtitle}
          </Text>
        ) : null}
        <Box marginTop="s">
          {surveyCompleted === false ? (
            <MultipleChoice
              choices={filteredChoices}
              onChoiceSelected={handleChoiceSelection}
              selectedIndexes={
                selectedIndex === undefined ? [] : [selectedIndex]
              }
            />
          ) : (
            <SurveyCompletedView onRestart={resetSurvey} />
          )}
        </Box>
      </Box>
    </ExtensionProviders>
  )
}
