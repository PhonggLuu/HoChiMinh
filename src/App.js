import React, { useState, useEffect, Suspense } from "react";
import Navigation from "./components/navigation";
import LoadingSpinnerOverlay from "./components/Spinner/LoadingSpinnerOverlay";
// import QA from "./components/form-quizz";
// import Home from "./components/home";
// import Map from "./components/map";
const Home = React.lazy(() => import("./components/home"));
const Map = React.lazy(() => import("./components/map"));
const Cards = React.lazy(() => import("./components/cards"));
const QA = React.lazy(() => import("./components/form-quizz"));

function App() {
  const [selectedSection, setSelectedSection] = useState("home");

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 0) {
        // Scrolling down
        if (selectedSection === "home") {
          setSelectedSection("world-map");
        } else if (selectedSection === "world-map") {
          setSelectedSection("quizz");
        }
      } else {
        // Scrolling up
        if (selectedSection === "quizz") {
          setSelectedSection("world-map");
        } else if (selectedSection === "world-map") {
          setSelectedSection("home");
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [selectedSection]);
  return (
    <>
      <Navigation setSelectedSection={setSelectedSection} />
      <Suspense fallback={<div><LoadingSpinnerOverlay /></div>}>
        {selectedSection === "home" && <Home />}
        {selectedSection === "world-map" && <Map />}
        {selectedSection === "cards" && <Cards />}
        {selectedSection === "heritage" && <Map />}{" "}
        {/* Giả sử đây là phần Di Sản */}
        {selectedSection === "quizz" && <QA />}
      </Suspense>
    </>
  );
}

export default App;
