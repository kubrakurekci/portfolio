import React from "react";
import Cat from "./components/Cat.jsx";
import Navigation from "./components/Navigation.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import EducationTimeline from "./components/Timeline.jsx";
function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <EducationTimeline />
      <Cat />
      <Footer />
    </div>
  );
}

export default App;
