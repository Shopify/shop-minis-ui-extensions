import {useState, useCallback, useMemo} from 'react'
import {
  Box,
  Text,
  ExtensionProviders,
  RadioButton,
  Button,
} from '@shopify/shop-minis-platform-sdk'

import {SurveySingleResponseProps, ChoiceOption} from './types'

const MAX_CHOICES = 5

/**
 * SurveySingleResponse is a component used to display a single-choice survey question.
 *
 * The component presents a list of choices to the user, allowing them to select one option.
 * If more than 5 choices are provided, only the first 4 are displayed along with a "See More" option.
 *
 * The display of choices depends on the `singleQuestionSurvey` prop:
 * - If `true`: Choices are displayed as radio buttons, suitable for a single-question survey where
 *   the user's selection is the final action.
 * - If `false`: Choices are displayed as buttons with chevrons, indicating that selecting an option
 *   will lead to a follow-up question or screen in the full-screen Mini viewer.
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
 *   seeMoreChoice={{ label: 'Other', value: 'seeMore' }}
 *   singleQuestionSurvey={true}
 * />

 *
 * @param {Object} props - The component props
 * @param {ChoiceOption[]} [props.choices] - An array of choices to be displayed in the survey
 * @param {function} props.onChoiceSelected - Callback function invoked when a choice is selected.
 * It receives the index of the selected choice and its value as arguments.
 * @param {string} [props.title] - The title of the survey question
 * @param {ChoiceOption} [props.seeMoreChoice] - The choice to be displayed if there are more than MAX_CHOICES
 * @param {boolean} [props.singleQuestionSurvey=false] - Determines the display style of choices:
 * - true: Displays choices as radio buttons for a single-question survey
 * - false: Displays choices as buttons with chevrons, indicating follow-up questions in a full-screen Mini viewer
 */
export function SurveySingleResponse({
  choices,
  onChoiceSelected,
  seeMoreChoice,
  title,
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

  const renderChoice = useCallback(
    (choice: ChoiceOption, index: number) => {
      if (singleQuestionSurvey && choice !== seeMoreChoice) {
        return (
          <RadioButton
            size="l"
            active={selectedIndex === index}
            text={choice.label}
            onPress={() => handleChoiceSelection(index, choice.value)}
          />
        )
      }
      return (
        <Button
          text={choice.label}
          variant="tertiary"
          size="l"
          textAlign="left"
          rightIcon="chevron-right"
          onPress={() => handleChoiceSelection(index, choice.value)}
        />
      )
    },
    [singleQuestionSurvey, seeMoreChoice, selectedIndex, handleChoiceSelection]
  )

  return (
    <ExtensionProviders>
      <Box marginTop="m">
        <Text variant="sectionTitle">{title}</Text>
        <Box marginTop="s">
          {limitedChoices.map((choice, index) => (
            <Box marginVertical="xxs" key={choice.value}>
              {renderChoice(choice, index)}
            </Box>
          ))}
        </Box>
      </Box>
    </ExtensionProviders>
  )
}
