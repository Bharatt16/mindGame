import { useState, useEffect } from "react";
import characters from "../character.json";

export default function RandomCharacters({ selected, setSelected, showCards, setShowCards }) {
  const [randomChars, setRandomChars] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  // Shuffle cards initially
  useEffect(() => {
    shuffleCards();
  }, []);

  // Shuffle logic: ensure at least 1 new card
  function shuffleCards() {
    const available = characters.filter((char) => !selected.includes(char.id)); // not picked yet
    let shuffled = [];

    if (available.length > 0) {
      // Pick 1 guaranteed new card
      const newCard = available[Math.floor(Math.random() * available.length)];

      // Pick 3 random from full list (can be old or new)
      const others = [...characters]
        .filter((c) => c.id !== newCard.id) // avoid duplicating
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      shuffled = [newCard, ...others];
    } else {
      // All cards are already picked → just shuffle any 4
      shuffled = [...characters].sort(() => 0.5 - Math.random()).slice(0, 4);
    }

    // Shuffle final 4 for randomness
    setRandomChars(shuffled.sort(() => 0.5 - Math.random()));
  }

  function gameStart(id) {
    if (selected.includes(id)) {
      console.log("Game Over");
      setGameOver(true);
    } else {
      setSelected((prev) => [...prev, id]); // ✅ live score updates
      shuffleCards(); // ✅ ensure next round includes at least 1 new
    }
  }

  function restart() {
    setSelected([]);     // reset score
    setGameOver(false);  // reset game over
    shuffleCards();      // reset deck
  }

  return (
    <div className="flex gap-6 p-6 flex-wrap justify-center flex-1">
      {gameOver ? (
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Game Over!</h1>
          <button
            onClick={restart}
            className="px-6 py-2 bg-amber-500 text-white rounded-xl shadow-lg hover:bg-amber-600 transition"
          >
            Restart
          </button>
        </div>
      ) : (
        randomChars.map((char) => (
          <div
            key={char.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden text-center w-65 p-4 cursor-pointer"
            onClick={() => gameStart(char.id)}
          >
            <img
              src={char.url}
              alt={char.name}
              className="w-full h-76 object-cover rounded-lg"
            />
            <h2 className="mt-3 text-lg font-bold">{char.name}</h2>
          </div>
        ))
      )}
    </div>
  );
}
