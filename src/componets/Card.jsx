import React from "react";

function Card({ character, handelShuffleCards, handleSelectedCards }) {
  return (
    <div
      key={character.id}
      className="bg-blue-950 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
    >
      <img
        className="w-full h-64 object-cover"
        src={character.image}
        alt={character.name}
        onClick={() => {
          handleSelectedCards(character.id);
          handelShuffleCards();
        }}
      />
      <div className="p-2 text-center bg-blue-950">
        <h3 className="text-lg font-semibold text-white">{character.name}</h3>
      </div>
    </div>
  );
}

export default Card;
