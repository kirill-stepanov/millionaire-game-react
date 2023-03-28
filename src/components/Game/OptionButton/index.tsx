import OptionButtonIcon from "../../../assets/icons/option-button-icon";
import { OptionData } from "../../../interfaces";

import "./styles.css";

type ButtonProps = {
  option: OptionData;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  isSelected: boolean;
  isCorrect?: boolean;
  isSubmitted?: boolean;
  isWrong?: boolean;
};

function OptionButton(props: ButtonProps) {
  const { option, onClick, isSelected, isCorrect, isSubmitted, isWrong } =
    props;

  const getClassName = (className: string) => {
    return `${className}${!isSubmitted && isSelected ? "--selected" : ""} ${
      isSubmitted
        ? `${className}${
            isSubmitted && isCorrect ? "--correct" : isWrong ? "--wrong" : ""
          }`
        : ""
    }  `;
  };

  return (
    <div onClick={onClick} className={getClassName("option__button")}>
      <OptionButtonIcon />

      <div className={getClassName("option__line")} />

      <div className="option__text">
        <span className="option__letter">{option.letter}</span>
        <span className="option__answer">{option.answer}</span>
      </div>
    </div>
  );
}

export default OptionButton;
