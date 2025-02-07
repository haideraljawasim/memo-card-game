import React, { useState } from "react";
import Header from "./componets/Header";
import Cards from "./componets/Cards";
import Footer from "./componets/Footer";

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="flex flex-col min-h-screen bg-[#323232]">
      <div className=" flex-grow">
        <Header score={score} />
        <Cards setScore={setScore} score={score} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
