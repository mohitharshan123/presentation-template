import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import "preline/preline";
import { IStaticMethods } from "preline/preline";
import Dashboard from "./pages/Dashboard";
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
      {["/", "/home"].map((path) => (
        <Route path={path} element={<Dashboard />} />
      ))}
    </Routes>
  );
};

export default App;
