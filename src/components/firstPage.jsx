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
        <div className="min-h-screen md:bg-[url('/assets/loader.jpg')] bg-[url('/assets/mobileBG-1.jpg')]  bg-cover bg-center p-5 flex flex-col justify-between">
          <Nav ShowCards={showCards} selected={selected} />
          <form
            className="flex flex-col items-center justify-around border rounded-2xl bg h-100 sm:w-1/2 md:w-1/3 p-5 backdrop-blur-sm shadow-lg"
            onSubmit={(e) => {
              e.preventDefault(); // prevent full page reload
              setShowCards(true); // start game
            }}
          >
            <h1 className="text-white text-4xl font-[newOne] font-bold tracking-wide text-center">
              Marvel Memory Game
            </h1>
            <input
              type="text"
              placeholder="Enter Name"
              className="bg-white/90 rounded-2xl p-2"
              required
            />
            <button type="submit" className=" font-[newOne] cursor-pointer p-2 bg-blue-50/40 tracking-normal hover:tracking-widest hover:font-bold rounded-2xl w-30 transition-all ">
              Start
            </button>
          </form>
          <Footer />
        </div>
      ) : (
        <div className="min-h-screen md:bg-[url('/assets/battlefield.jpg')] bg-[url('/assets/mobileBG-2.jpg')] bg-cover bg-center p-5 flex flex-col md:justify-between">
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
