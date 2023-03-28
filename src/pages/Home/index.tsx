import { Link } from "react-router-dom";

import StartGameIcon from "../../assets/icons/start-game-icon";

import { LINKS } from "../../constants";

import Button from "../../components/Common/Button";

import "./styles.css";

function Home() {
  return (
    <section className="home__container">
      <div className="home__container__wrapper">
        <StartGameIcon />

        <div>
          <h1 className="home__container__title">
            Who wants to be a millionaire?
          </h1>

          <Link to={LINKS.GAME}>
            <Button>Start</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
