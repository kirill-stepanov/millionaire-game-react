import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Game from "./pages/Game";
import Finish from "./pages/Finish";

import { LINKS } from "./constants";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={LINKS.HOME} element={<Home />} />
          <Route path={LINKS.GAME} element={<Game />} />
          <Route path={LINKS.FINISH} element={<Finish />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
