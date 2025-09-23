import { useState } from "react";
import Nav from "./nav.jsx";
import Footer from "./footer.jsx";
import RandomCharacters from "./characters.jsx";

export default function FirstPage() {
  const [selected, setSelected] = useState([]); // all clicked characters
  const [showCards, setShowCards] = useState(false); // tracks if game is running

  return (
    <>
      {!showCards ? (
        <div className="min-h-screen bg-[url('./src/assets/loader.jpg')] bg-cover bg-center p-5 flex flex-col justify-between">
          <Nav ShowCards={showCards} selected={selected} />
          <form
            className="flex flex-col items-center justify-around border rounded-2xl bg h-100 md:w-1/3 p-5 backdrop-blur-sm shadow-lg"
            onSubmit={(e) => {
              e.preventDefault(); // prevent full page reload
              setShowCards(true); // start game
            }}
          >
            <h1 className="text-white text-4xl font-medium font-mono text-center">
              Marvel Memory Game
            </h1>
            <input
              type="text"
              placeholder="Enter Name"
              className="bg-amber-100 rounded-2xl p-2"
              required
            />
            <button type="submit" className="p-2 bg-amber-50 rounded-2xl w-30">
              Start
            </button>
          </form>
          <Footer />
        </div>
      ) : (
        <div className="min-h-screen bg-[url('./src/assets/battlefield.jpg')] bg-cover bg-center p-5 flex flex-col md:justify-between">
          <Nav
            ShowCards={showCards}
            selected={selected}
            setShowCards={setShowCards}
          />
          <RandomCharacters
            selected={selected}
            setSelected={setSelected}
            showCards={showCards}
            setShowCards={setShowCards}
          />
          <Footer />
        </div>
      )}
    </>
  );
}
