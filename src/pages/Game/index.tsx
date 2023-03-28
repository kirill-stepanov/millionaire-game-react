import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import questions from "../../assets/json/game-data.json";

import Button from "../../components/Common/Button";
import Loader from "../../components/Game/Loader";
import OptionButton from "../../components/Game/OptionButton";
import ProgressBar from "../../components/Game/ProgressBar";
import ProgressBarMobile from "../../components/Game/ProgressBarMobile";
import { LINKS } from "../../constants";

import { OptionData, QuestionData } from "../../interfaces";

import "./styles.css";

const Game = () => {
  const navigate = useNavigate();

  const [question, setQuestion] = useState<QuestionData | null>(null);
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<OptionData[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [totalPrize, setTotalPrize] = useState(0);

  useEffect(() => {
    setCurrentQuestionId(questions[0].id);
  }, []);

  useEffect(() => {
    const currentQuestion = questions.find(
      (question) => question.id === currentQuestionId
    );

    currentQuestion && setQuestion(currentQuestion);
  }, [currentQuestionId]);

  const onSubmit = () => {
    setIsSubmitted(true);

    selectedOptions.forEach((selectedOption) => {
      if (!question?.answerIds.includes(selectedOption.id)) {
        setIsAnswerWrong(true);
      }
    });
  };

  const nextQuestion = () => {
    question && setTotalPrize(question.prize);
    if (currentQuestionId === questions.at(0)?.id) {
      navigate(LINKS.FINISH, {
        state: {
          prize: question?.prize,
        },
      });
      navigate(0);
    }
    currentQuestionId && setCurrentQuestionId(currentQuestionId + 1);
    setIsSubmitted(false);
    setIsAnswerWrong(false);
    setSelectedOptions([]);
  };

  const finish = () => {
    navigate(LINKS.FINISH, {
      state: {
        prize: totalPrize,
      },
    });
    navigate(0);
    setCurrentQuestionId(1);
    setIsSubmitted(false);
    setIsAnswerWrong(false);
  };

  const selectOption = (option: OptionData) => {
    if (!isSubmitted) {
      if (selectedOptions.includes(option)) {
        const newOptions = selectedOptions.filter(
          (selectedOption) => selectedOption.id !== option.id
        );

        setSelectedOptions([...newOptions]);
      } else {
        setSelectedOptions((prevState) => [...prevState, option]);
      }
    }
  };

  return (
    <section className="game__container">
      {question && currentQuestionId ? (
        <>
          <ProgressBarMobile
            currentQuestionId={currentQuestionId}
            questions={questions.sort((a, b) => b.prize - a.prize)}
          />

          <div className="question__container">
            <div className="question__wrapper">
              <h1 className="question__title">{question.question}</h1>

              <div>
                <div className="options__list">
                  {question.options.map((option) => (
                    <OptionButton
                      key={option.id}
                      option={option}
                      isSelected={selectedOptions.includes(option)}
                      isSubmitted={isSubmitted}
                      isCorrect={question.answerIds.includes(option.id)}
                      isWrong={selectedOptions.includes(option)}
                      onClick={() => selectOption(option)}
                    />
                  ))}
                </div>

                {isSubmitted ? (
                  isAnswerWrong ||
                  selectedOptions.length < question.answerIds.length ? (
                    <Button onClick={finish}>Finish</Button>
                  ) : (
                    <Button onClick={nextQuestion}>Go next</Button>
                  )
                ) : (
                  <Button onClick={onSubmit}>Submit</Button>
                )}
              </div>
            </div>
          </div>

          <ProgressBar
            currentQuestionId={currentQuestionId}
            questions={questions.sort((a, b) => b.prize - a.prize)}
          />
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Game;
