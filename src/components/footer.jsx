import { useState, useEffect , useRef } from "react";
import avengersSong from "../assets/avengers.mp3";


export default function Footer() {
  const audioRef = useRef(new Audio(avengersSong)); // persistent audio
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // initial volume 50%

      // Apply volume to audio
    useEffect(() => {
      audioRef.current.volume = volume;
      audioRef.current.loop = true; // loop the music
    }, [volume]);

      // Click on the volume bar to change volume
    const handleVolumeClick = (e) => {
      const bar = e.currentTarget;
      const rect = bar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newVolume = Math.min(Math.max(clickX / rect.width, 0), 1);
      setVolume(newVolume);
    };

    const handleVolume = (e) =>{
        setVolume(parseFloat(e.target.value))
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
    <div className="footer mt-5 flex justify-between items-center px-5">
      <div className="volumeMusic flex justify-between items-center gap-5 px-5">
        <div className="volume group border bg-white/60 rounded-full p-2 backdrop-blur-sm shadow-lg flex items-center gap-3">
          <img className="h-7" src="./src/assets/volume.svg" alt="volume" />
          {/* <div className="relative flex-1 " onClick={handleVolumeClick}> */}
            {/* <div className="soundBar bg-black h-1 rounded-full w-20"></div>
            <div className="circle absolute left- top-[-4px] bg-white rounded-full h-3 w-3 border"></div> */}
            <input type="range" min="0" max="1" step="0.01" value={volume} onChange={() => handleVolume()} className="w-0 opacity-0 group-hover:w-32 group-hover:opacity-100 transition-all duration-500 ease-in-out h-1 bg-gray-300 rounded-lg cursor-pointer accent-red-500" onClick={handleVolumeClick}/>
          {/* </div> */}
        </div>
        <div
          className="music border bg-white/60 rounded-full p-2 backdrop-blur-sm shadow-lg cursor-pointer"
          onClick={toggleMusic}
        >
          <img className="h-7" src="./src/assets/music.svg" alt="music" />
        </div>
      </div>
      <div className="question">
        <div className="questitonMark border bg-white/20 rounded-full p-2 backdrop-blur-sm shadow-lg">
          <img className="h-7" src="./src/assets/question.svg" alt="question" />
        </div>
      </div>
    </div>
  );
}



