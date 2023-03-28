export interface OptionData {
  id: number;
  answer: string;
  letter: string;
}

export interface QuestionData {
  id: number;
  question: string;
  answerIds: number[];
  prize: number;
  options: OptionData[];
}
