import { useState } from "react";
import Nav from "./nav.jsx";
import selected from './nav.jsx'
import Footer from "./footer.jsx";
import RandomCharacters from "./characters.jsx";



export default function Firstpage() {
  const [ShowCards, setShowCards] = useState(false);

  function gameStart() {
    setShowCards(true);
  }

  return (
    <>
      {(ShowCards) ? (
        <div className="min-h-screen bg-[url('./src/assets/loader.jpg')] bg-cover bg-center bg-no-repeat p-5 flex flex-col justify-between  ">
          <Nav ShowCards={ShowCards} selected={selected}/>

          <form
            action=""
            className="flex flex-col items-center justify-around border rounded-2xl bg h-100 md:w-1/3  p-5 backdrop-blur-sm shadow-lg"
          >
            <h1 className="text-white text-4xl font-medium font-mono text-center">
              Marvel Memory Game
            </h1>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              className="bg-amber-100 rounded-2xl p-2"
            />
            <button
              type="submit"
              className="p-2 bg-amber-50 rounded-2xl w-30"
              onClick={() => gameStart()}
            >
              Start
            </button>
          </form>

          <Footer />
        </div>
      ) : (
        <div className="min-h-screen bg-[url('./src/assets/battlefield.jpeg')] bg-cover bg-center bg-no-repeat p-5 flex flex-col md:justify-between  ">
          <Nav ShowCards={ShowCards} selected={selected}/>
          <RandomCharacters />
          <Footer />
        </div>
      )}
    </>
  );
}
