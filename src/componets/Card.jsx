import React from "react";

function Card({ character, handelShuffleCards, handleSelectedCards }) {
  return (
    <div
      key={character.id}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
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
      <div className="p-2 text-center bg-gray-100">
        <h3 className="text-lg font-semibold text-gray-800">
          {character.name}
        </h3>
      </div>
    </div>
  );
}

export default Card;
