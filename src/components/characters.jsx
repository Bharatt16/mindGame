import { useState, useEffect } from "react";
import characters from "../character.json";
import "./flip.css"; // <-- we'll create this file for flip animation

export default function RandomCharacters({ selected, setSelected }) {
  const [randomChars, setRandomChars] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    shuffleCards();
  }, []);

  const handleCardClick = (id) => {
    // Step 1: flip all cards
    setIsFlipping(true);
  
    // Step 2: wait for flip to complete (600ms)
    setTimeout(() => {
      // Step 3: shuffle cards
      setRandomChars((prev) => {
        const shuffled = [...prev].sort(() => Math.random() - 0.5);
        return shuffled;
      });
  
      // Step 4: flip back after short delay
      setTimeout(() => {
        setIsFlipping(false);
      }, 50);
  
      // Step 5: handle game logic
      gameStart(id);
    }, 600);
  };
  
  

  function shuffleCards() {
    const available = characters.filter((char) => !selected.includes(char.id));
    let shuffled = [];

    if (available.length > 0) {
      const newCard = available[Math.floor(Math.random() * available.length)];

      const others = [...characters]
        .filter((c) => c.id !== newCard.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      shuffled = [newCard, ...others];
    } else {
      shuffled = [...characters].sort(() => 0.5 - Math.random()).slice(0, 4);
    }

    setRandomChars(shuffled.sort(() => 0.5 - Math.random()));
  }

  function gameStart(id) {
    if (selected.includes(id)) {
      console.log("Game Over");
      setGameOver(true);
    } else {
      setSelected((prev) => [...prev, id]);
      shuffleCards();
    }




  }

  function restart() {
    setSelected([]);
    setGameOver(false);
    shuffleCards();
  }

  return (
    <div className="flex gap-6 p-6 flex-wrap items-center justify-center flex-1">
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
          // <div
          //   key={char.id}
          //   className={`card bg-white/30 rounded-2xl shadow-lg h-auto overflow-hidden text-center md:w-65 w-36 p-4 cursor-pointer transition-transform duration-500 ${
          //     isFlipping ? "flip" : ""
          //   }`}
          //   onClick={() => handleCardClick(char.id)}
          // >
          //   <img
          //     src={char.url}
          //     alt={char.name}
          //     className="w-full md:h-76 h-30 object-cover rounded-lg"
          //   />
          //   <h2 className="mt-3 text-lg font-bold">{char.name}</h2>
          // </div>

          <div
          key={char.id}
          className="card relative bg-white/30 rounded-2xl md:h-95 h-50 overflow-hidden shadow-amber-50 hover:shadow-blue-200 hover:shadow-2xl text-center md:w-65 w-36 p-4 cursor-pointer"
          onClick={() => handleCardClick(char.id)}
        >
          <div className={`card-inner w-full h-full transition-transform duration-500 ${isFlipping ? "flip" : ""}`}>
            
            {/* Front */}
            <div className="card-front w-full flex flex-col items-center justify-start">
              <img
                src={char.url}
                alt={char.name}
                className="w-full md:h-76 h-30 object-cover rounded-lg"
              />
              <h2 className="mt-3 text-lg font-bold">{char.name}</h2>
            </div>
        
            {/* Back */}
            <div className="card-back absolute inset-0 flex items-center justify-center">
              <img
                src="https://4kwallpapers.com/images/wallpapers/avengers-endgame-marvel-superheroes-marvel-comics-5k-1440x2560-942.jpg"
                alt="Card Back"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
        
          </div>
        </div>
        
        ))
      )}
    </div>
  );
}
