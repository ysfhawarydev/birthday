import { Music2, Volume2, VolumeX } from "lucide-react";
import { useAudio } from "../hooks/useAudio";
export function Music() {
  const { playing, toggle } = useAudio(`${import.meta.env.BASE_URL}music/our-song.mp3`);
  return (
    <button className="music" onClick={toggle} aria-label="Toggle music">
      <span className="music-disc">
        <Music2 size={18} />
      </span>
      <span className="music-copy">
        {playing ? "our song is playing ♡" : "play our song ♡"}
      </span>
      {playing ? <Volume2 size={17} /> : <VolumeX size={17} />}
    </button>
  );
}
