import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import requestes from "./requestes";

function App() {
  const [selectedOption, setSlectedOption] = useState(requestes.fetchTrending);
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* Navigation */}
      <Nav setSlectedOption={setSlectedOption} />
      {/* Results */}
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
