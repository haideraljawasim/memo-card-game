import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "./Loader";

const BASE_URL = "http://localhost:9000/characters";

function Cards({ setScore, score }) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();

        setCards(() => shuffleCards(data));
      } catch (error) {
        console.error("Error happened fetching the data", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCards();
  }, []);
  useEffect(() => {
    localStorage.setItem("highscore", score);
  }, [score]);

  function shuffleCards(cardsArray) {
    const shuffled = [...cardsArray];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[i],
      ];
    }
    return shuffled;
  }
  function handelShuffleCards() {
    setCards(() => shuffleCards(cards));
  }

  function handleSelectedCards(characterID) {
    if (!selectedCards.includes(characterID)) {
      setSelectedCards((prevCards) => [...prevCards, characterID]);
      setScore((prevScore) => {
        const newScore = prevScore + 1;
        const highScore = Number(localStorage.getItem("highScore")) || 0;

        if (newScore > highScore) {
          localStorage.setItem("highScore", newScore);
        }

        return newScore;
      });
    } else {
      setScore(0);
      setSelectedCards([]);
    }
  }

  if (isLoading) return <Loader />;
  console.log(cards);

  return (
    <div className="flex items-center justify-center p-4 w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {cards.map((character) => (
          <Card
            character={character}
            handelShuffleCards={handelShuffleCards}
            handleSelectedCards={handleSelectedCards}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
