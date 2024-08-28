import {useState, useCallback, useMemo} from 'react'
import {
  Box,
  Text,
  ExtensionProviders,
  RadioButton,
  Button,
} from '@shopify/shop-minis-platform-sdk'

import {SurveySingleResponseProps} from './types'
import {CHOICES} from './seed'

const MAX_CHOICES = 5

/**
 * SurveySingleResponse is a component used to display a single-choice survey question.
 *
 * The component presents a list of up to 5 choices to the user, allowing them to select one option.
 * If more than 5 choices are provided, only the first 4 are displayed among the seeMoreChoice.
 * After selection, it shows a completion message and offers the option to restart the survey.
 *
 * @component
 * @example
 * <SurveySingleResponse
 *   choices={[
 *     { label: 'Option 1', value: 'opt1' },
 *     { label: 'Option 2', value: 'opt2' },
 *     { label: 'Option 3', value: 'opt3' },
 *   ]}
 *   onChoiceSelected={(index, value) => console.log(index, value)}
 *   title="How did you find us?"
 * />
 *
 * @param {Object} props - The component props
 * @param {ChoiceOption[]} props.choices - An array of choices to be displayed in the survey (max 5)
 * @param {function} props.onChoiceSelected - Callback function invoked when a choice is selected.
 * It receives the index of the selected choice and its value as arguments.
 * @param {string} [props.title="How did you find about us?"] - The title of the survey question
 * @param {string} [props.subtitle] - An optional subtitle for additional context
 */
export function SurveySingleResponse({
  choices = CHOICES,
  onChoiceSelected,
  seeMoreChoice = {label: 'Other', value: 'other'},
  title = 'How did you find about us?',
  singleQuestionSurvey = false,
}: SurveySingleResponseProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>()

  const limitedChoices = useMemo(() => {
    if (choices.length > MAX_CHOICES) {
      return [...choices.slice(0, MAX_CHOICES - 1), seeMoreChoice]
    }
    return choices
  }, [choices, seeMoreChoice])

  const handleChoiceSelection = useCallback(
    (index: number, value: string | number) => {
      setSelectedIndex(prevIndex => (prevIndex === index ? undefined : index))
      onChoiceSelected(index, value)
    },
    [onChoiceSelected]
  )

  return (
    <ExtensionProviders>
      <Box marginTop="m">
        <Text variant="sectionTitle">{title}</Text>
        <Box marginTop="s">
          {limitedChoices.map((choice, index) => (
            <Box marginVertical="xxs" key={choice.value}>
              {singleQuestionSurvey === false || choice === seeMoreChoice ? (
                <Button
                  text={choice.label}
                  variant="tertiary"
                  size="l"
                  textAlign="left"
                  rightIcon="chevron-right"
                  onPress={() => handleChoiceSelection(index, choice.value)}
                />
              ) : (
                <RadioButton
                  size="l"
                  active={selectedIndex === index}
                  text={choice.label}
                  onPress={() => handleChoiceSelection(index, choice.value)}
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </ExtensionProviders>
  )
}
