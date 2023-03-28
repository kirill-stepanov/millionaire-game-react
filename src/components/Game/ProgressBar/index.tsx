import PrizeButtonActiveIcon from "../../../assets/icons/prize-button-active-icon";
import PrizeButtonIcon from "../../../assets/icons/prize-button-icon";

import { QuestionData } from "../../../interfaces";

import { getFormattedNumber } from "../../../utils";

import "./styles.css";

type ProgressBarProps = {
  questions: QuestionData[];
  currentQuestionId: number;
};

function ProgressBar(props: ProgressBarProps) {
  const { questions, currentQuestionId } = props;

  const getClassName = (id: number) => {
    return id === currentQuestionId
      ? "--active"
      : id > currentQuestionId
      ? "--next"
      : "--previous";
  };

  return (
    <div className="prize__container">
      {questions
        .slice(0)
        .reverse()
        .map((question) => (
          <div
            key={question.id}
            className={`prize__button${getClassName(question.id)}`}
          >
            {question.id === currentQuestionId ? (
              <PrizeButtonActiveIcon />
            ) : (
              <PrizeButtonIcon />
            )}

            <span className="prize__button__text">
              {getFormattedNumber(question.prize)}
            </span>
          </div>
        ))}
    </div>
  );
}

export default ProgressBar;
