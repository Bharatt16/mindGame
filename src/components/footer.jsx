import { useState, useEffect , useRef } from "react";
import avengersSong from "/assets/avengers.mp3";


export default function Footer() {
  const audioRef = useRef(new Audio(avengersSong)); // persistent audio
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // initial volume 50%
  const [isQuestion , setIsQuestion] = useState(false)

      // Apply volume to audio
    useEffect(() => {
      audioRef.current.volume = volume;
      audioRef.current.loop = true; // loop the music
    }, [volume]);

    //   // Click on the volume bar to change volume
    // const handleVolumeClick = (e) => {
    //   const bar = e.currentTarget;
    //   const rect = bar.getBoundingClientRect();
    //   const clickX = e.clientX - rect.left;
    //   const newVolume = Math.min(Math.max(clickX / rect.width, 0), 1);
    //   setVolume(newVolume);
    // };

    const handleVolume = (e) =>{
        setVolume(parseFloat(e.target.value))
    }


    const handleQuestion = ()=>{
          setIsQuestion(!isQuestion)
    }


  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };


  return (
<>
  



<div className="footer relative mt-5 flex justify-between items-center px-5">
  {/* Left side (Volume + Music buttons) */}
  <div className="volumeMusic flex justify-between items-center gap-5 px-5">
    <div className="volume group border bg-white/60 rounded-full p-2 backdrop-blur-sm shadow-lg flex items-center gap-3">
      <img className="h-7" src="/assets/volume.svg" alt="volume" />
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolume}
        className="w-0 opacity-0 group-hover:w-32 group-hover:opacity-100 transition-all duration-500 ease-in-out h-1 bg-gray-300 rounded-lg cursor-pointer accent-red-500"
      />
    </div>
    <div
      className="music border bg-white/60 rounded-full p-2 backdrop-blur-sm shadow-lg cursor-pointer"
      onClick={toggleMusic}
    >
      <img className="h-7" src="/assets/music.svg" alt="music" />
    </div>
  </div>

  {/* Right side (Question button only) */}
  <div className="question flex items-center">
    <div className="questionMark border bg-white/20 rounded-full p-2 backdrop-blur-sm shadow-lg">
      {isQuestion ? (
        <img
          src="/assets/close.svg"
          alt="close"
          className="h-7 cursor-pointer"
          onClick={()=>handleQuestion()}
        />
      ) : (
        <img
          src="/assets/question.svg"
          alt="question"
          className="h-7 cursor-pointer"
          onClick={()=>handleQuestion()}
        />
      )}
    </div>
  </div>

  {/* Thanos absolutely positioned */}
   {(isQuestion) && <div className="detailsWrapper absolute bottom-0 md:right-10 md:flex right-0">
    <div className="details flex flex-col gap-3">
      <div className="detail-1 border-2 w-85 p-3 font-bold text-blue-50 bg-red-500 rounded-2xl">
        <p>Don't click on the same card twice!</p>
      </div>
      <div className="detail-2 border-2 w-85 p-3 font-bold text-blue-50 bg-red-500 rounded-2xl">
        <p>Click on Marvel logo to go back.</p>
      </div>
    </div>
    <img src="/assets/thanos.png" alt="thanos" className="h-60" />
  </div> }




</div>

    </>
  );
}



