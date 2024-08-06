export interface ChoiceOption {
  label: string
  value: string | number
}

export interface SurveySingleResponseProps {
  onChoiceSelected: (index: number, value: string | number) => void
  title?: string
  subtitle?: string
  otherOption?: ChoiceOption
}

export interface SurveyCompletedViewProps {
  onRestart: () => void
}
