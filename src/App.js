import React from "react";
import Navigation from "./components/navigation";
import QA from "./components/form-quizz";
import Home from "./components/home";
import Map from "./components/map";

function App() {
  return (
    <>
    <Navigation />
    <Home />
    <Map />
    <QA />
    </>
  );
}

export default App;
