import { useState, useEffect } from "react";
import characters from "../character.json"; // adjust path if needed
// import setShowCards from './firstPage'

export default function RandomCharacters() {
  const [randomChars, setRandomChars] = useState([]);
  const [selected, setSelected] = useState([]); // ✅ track clicked IDs



  // Shuffle and pick 4 random characters
  useEffect(() => {
    const shuffled = [...characters].sort(() => 0.5 - Math.random());
    setRandomChars(shuffled.slice(0, 4));
  }, []);

  function gameStart(id) {
    console.log("Clicked character id:", id);
    const shuffled = [...characters].sort(() => 0.5 - Math.random());
    setRandomChars(shuffled.slice(0, 4));

    
    if(selected.includes(id)){
        console.log("gaameover")
    } else {
        setSelected((prev) => [...prev, id]);
        console.log("Selected characters:", [...selected, id]);

    }
    
  }

  return (
    <div className="flex gap-6 p-6 flex-wrap justify-center flex-1">
      {randomChars.map((char) => (
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
      ))}
    </div>
  );
}
