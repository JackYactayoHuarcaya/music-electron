import { useRef, useState, useEffect } from "react";
import { Metadata } from "../../lib/musicsData";

interface AudioPlayerProps {
  src: string;
  audioRef: React.RefObject<HTMLAudioElement>;
  listMusic: Metadata[];
  positionAudio: number;
  setMusic: (music: Metadata) => void;
  setPositionAudio: React.Dispatch<React.SetStateAction<number>>;
}

export const TimeLine = ({
  src,
  audioRef,
  listMusic,
  positionAudio,
  setMusic,
  setPositionAudio,
}: AudioPlayerProps) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Actualizar la barra + tiempos
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
      const percent = (audio.currentTime / audio.duration) * 100;
      setProgress(percent);
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, [audioRef]);

  // Saltar en la barra
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    const bar = progressRef.current;
    if (!audio || !bar) return;

    const width = bar.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    audio.currentTime = (clickX / width) * audio.duration;
  };

  // Siguiente canción
  const handledEnded = () => {
    const newMusic = listMusic[positionAudio + 1];
    if (newMusic) {
      setMusic(newMusic);
      setPositionAudio(positionAudio + 1);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <audio ref={audioRef} src={src} onEnded={handledEnded} />

      {/* Barra */}
      <div
        ref={progressRef}
        onClick={handleSeek}
        className="no-drag w-full h-2 bg-gray-300 rounded-full cursor-pointer"
      >
        <div
          className="h-full no-drag bg-purple-600 rounded-full transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Tiempo */}
      <div className="flex justify-between text-sm text-gray-600 mt-1">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};
