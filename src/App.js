import React from "react";
import Navbar from "./sections/Navbar/index";
import Header from "./sections/Header";
import AboutMe from "./sections/AboutMe";
import Work from "./sections/Work";
import Expertise from "./sections/Expertise";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <Work />
      <Expertise />
    </div>
  );
}

export default App;
