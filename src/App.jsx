import React from "react";
import { Route, Routes } from "react-router";
import Container from "./component/Container";
import Home from "./pages/Home";
import ThemeModal from "./component/theme/ThemeModal";

function App() {
  return (
    <div className="   overflow-hidden bg-[#F0F8FF]  dark:bg-[#0c0d13]">
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<ThemeModal />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
