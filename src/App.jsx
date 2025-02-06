import React, { useState } from "react";
import Header from "./componets/Header";
import Cards from "./componets/Cards";
import Footer from "./componets/Footer";

function App() {
  const [score, setScore] = useState(0);
  return (
    <div>
      <Header score={score} />
      <Cards setScore={setScore} score={score} />
      <Footer />
    </div>
  );
}

export default App;
