import React from "react";

function Header({ score }) {
  const heighestScore = localStorage.getItem("highscore");
  return (
    <div className="flex w-full h-15 bg-black text-white justify-between items-center p-4">
      <h1 className="flex font-roboto font-black text-4xl self-center ">
        Memo card game{" "}
      </h1>
      <div className="font-semibold font-roboto ">
        <span>Score : {score} </span>
        <span>Highest Score : {heighestScore} </span>
      </div>
    </div>
  );
}

export default Header;
