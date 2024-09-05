import { useEffect } from "react";

import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import { IStaticMethods } from "preline/preline";

import Dashboard from "./pages/Dashboard";
import Player from "./pages/Player";

import "preline/preline";
import { ROUTES } from "./constants/routes";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <Routes>
      {["/", ROUTES.home].map((path) => (
        <Route path={path} element={<Dashboard />} />
      ))}
      <Route path={ROUTES.player} element={<Player />} />
    </Routes>
  );
};

export default App;
