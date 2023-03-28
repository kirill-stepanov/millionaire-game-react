import { useState } from "react";

import CloseIcon from "../../../assets/icons/close-icon";
import MenuIcon from "../../../assets/icons/menu-icon";
import PrizeButtonActiveIcon from "../../../assets/icons/prize-button-active-icon";
import PrizeButtonIcon from "../../../assets/icons/prize-button-icon";

import { QuestionData } from "../../../interfaces";

import { getFormattedNumber } from "../../../utils";

import "./styles.css";

type ProgressBarMobileProps = {
  questions: QuestionData[];
  currentQuestionId: number;
};

function ProgressBarMobile(props: ProgressBarMobileProps) {
  const { questions, currentQuestionId } = props;

  const [isProgressBarActive, setIsProgressBarActive] = useState(false);

  const getClassName = (id: number) => {
    return id === currentQuestionId
      ? "--active"
      : id > currentQuestionId
      ? "--next"
      : "--previous";
  };

  return (
    <>
      <button
        className="menu__button"
        onClick={() => setIsProgressBarActive(!isProgressBarActive)}
      >
        {isProgressBarActive ? <CloseIcon /> : <MenuIcon />}
      </button>

      {isProgressBarActive && (
        <div className="prize__container__mobile">
          {questions.map((question) => (
            <div
              key={question.id}
              className={`prize__button${getClassName(question.id)}`}
            >
              {question.id === currentQuestionId ? (
                <>
                  <div className="prize__button__line--active" />
                  <PrizeButtonActiveIcon />
                  <div className="prize__button__line--active" />
                </>
              ) : (
                <>
                  <div className="prize__button__line" />
                  <PrizeButtonIcon />
                  <div className="prize__button__line" />
                </>
              )}

              <span className="prize__button__text">
                {getFormattedNumber(question.prize)}
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ProgressBarMobile;
