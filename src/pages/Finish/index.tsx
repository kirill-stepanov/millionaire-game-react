import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import StartGameIcon from "../../assets/icons/start-game-icon";

import { LINKS } from "../../constants";

import Button from "../../components/Common/Button";

import { getFormattedNumber } from "../../utils";

import "./styles.css";

function Finish() {
  const { state } = useLocation();

  const navigation = useNavigate();

  useEffect(() => {
    !state && navigation(LINKS.HOME);
  }, []);

  return (
    <section className="finish__container">
      {state && (
        <>
          <StartGameIcon />

          <div className="text__wrapper">
            <h2 className="finish__container__subtitle">Total score:</h2>

            <h1 className="finish__container__title">
              {getFormattedNumber(state.prize)} earned
            </h1>

            <Link to={LINKS.GAME}>
              <Button>Try again</Button>
            </Link>
          </div>
        </>
      )}
    </section>
  );
}

export default Finish;
