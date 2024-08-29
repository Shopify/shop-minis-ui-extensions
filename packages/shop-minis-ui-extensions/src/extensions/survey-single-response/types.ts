export interface ChoiceOption {
  label: string
  value: string | number
}

export interface SurveySingleResponseProps {
  choices: ChoiceOption[]
  onChoiceSelected: (index: number, value: string | number) => void
  title: string
  seeMoreChoice: ChoiceOption
  singleQuestionSurvey: boolean
}
