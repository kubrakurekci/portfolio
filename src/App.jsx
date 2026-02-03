import React from "react";
import Cat from "./components/Cat.jsx";
import Navigation from "./components/Navigation.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import Timeline from "./components/Timeline.jsx";
import Projects from "./components/Projects.jsx";
function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Timeline />
      <Projects />
      <Cat />
      <Footer />
    </div>
  );
}

export default App;
