import React from "react";
import Navbar from "./sections/Navbar/index";
import Header from "./sections/Header";
import AboutMe from "./sections/AboutMe";
import Work from "./sections/Work";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <Work />
    </div>
  );
}

export default App;
