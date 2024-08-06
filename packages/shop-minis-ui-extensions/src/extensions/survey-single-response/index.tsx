import {
  Box,
  Text,
  ExtensionProviders,
  MultipleChoice,
  Button,
} from '@shopify/shop-minis-platform-sdk'
import {useCallback, useState} from 'react'

import {CHOICES} from './seed'

const MAX_CHOICES = 5

export function SurveySingleResponse({
  onChoiceSelected,
  subtitle,
  title = 'How did you find about us?',
}: {
  onChoiceSelected: (index: number, value: string | number) => void
  title?: string
  subtitle?: string
}) {
  const [selectedIndex, setSelectedIndex] = useState<number>()
  const [surveyCompleted, setSurveyCompleted] = useState<boolean>(false)

  const onChoiceSelectedHandler = useCallback(
    async (index: number, value: string | number) => {
      setSelectedIndex(index === selectedIndex ? undefined : index)
      onChoiceSelected(index, value)
      setTimeout(() => {
        setSurveyCompleted(true)
      }, 1000)
    },
    [onChoiceSelected, selectedIndex]
  )

  const filteredChoices = CHOICES.slice(0, MAX_CHOICES - 1).concat({
    label: 'Other ...',
    value: 'other',
  })

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
              onChoiceSelected={onChoiceSelectedHandler}
              selectedIndexes={
                selectedIndex === undefined ? [] : [selectedIndex]
              }
            />
          ) : (
            <>
              <Text
                textAlign="center"
                variant="bodyLarge"
                color="foregrounds-subdued"
              >
                Thank you for your response!
              </Text>
              <Button
                text="Restart survey"
                variant="borderless"
                onPress={() => {
                  setSurveyCompleted(false)
                  setSelectedIndex(undefined)
                }}
              />
            </>
          )}
        </Box>
      </Box>
    </ExtensionProviders>
  )
}
