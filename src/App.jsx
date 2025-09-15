import React from "react";
import { Route, Routes } from "react-router";
import Container from "./component/Container";
import Home from "./pages/Home";

function App() {
  return (
    <div className="w-full overflow-hidden bg-[#F0F8FF]  dark:bg-[#0c0d13]">
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
