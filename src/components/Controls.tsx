import { useEffect, useRef } from "react";
import { listControls, pause } from "../constants/listControls";
import { musicStore } from "../stores/music";
import { TimeLine } from "./TimeLine";
import { listStore } from "../stores/list";

interface ControlsProps {
  play: boolean;
  setPlay: React.Dispatch<React.SetStateAction<boolean>>;
  positionAudio: number;
  setPositionAudio: React.Dispatch<React.SetStateAction<number>>;
}

export const Controls = ({
  play,
  setPlay,
  positionAudio,
  setPositionAudio,
}: ControlsProps) => {
  // music
  const music = musicStore((state) => state.music);
  const setMusic = musicStore((state) => state.setMusic);
  // lista de musics
  const listMusic = listStore((state) => state.listMusic);
  // ref de audio
  const audioRef = useRef<HTMLAudioElement>(null);
  // play o pause
  const togglePlay = () => {
    const audio = audioRef.current;
    // console.log(audio);
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setPlay(true);
    } else {
      audio.pause();
      setPlay(false);
    }
  };

  useEffect(() => {
    const audio = audioRef.current as HTMLAudioElement;
    if (audio.paused) {
      audio.play();
      setPlay(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [music]);

  return (
    <div className="">
      <div
        className="bg-[var(--bg1)] p-3 absolute bottom-0 
        left-0 right-0 rounded-b-[1rem] flex flex-col justify-center"
      >
        <TimeLine
          listMusic={listMusic}
          positionAudio={positionAudio}
          setMusic={setMusic}
          setPositionAudio={setPositionAudio}
          src={music.path}
          audioRef={audioRef}
        />
        <div className="flex justify-center">
          <ul className="flex gap-4 mt-2">
            {listControls.map((item, index) => (
              <li
                onClick={() => {
                  // console.log(item.name);
                  if (item.name === "play") {
                    togglePlay();
                  }
                  if (item.name === "next") {
                    const newMusic = listMusic[positionAudio + 1];
                    if (newMusic) {
                      setMusic(newMusic);
                      setPositionAudio(positionAudio + 1);
                    }
                  }
                  if (item.name === "preview") {
                    const newMusic = listMusic[positionAudio - 1];
                    if (newMusic) {
                      setMusic(newMusic);
                      setPositionAudio(positionAudio - 1);
                    }
                  }
                }}
                key={index}
                className="no-drag hover:opacity-70 bg-[var(--bg2)]/20 p-3 rounded-full"
              >
                {item.name === "play" ? (
                  play ? (
                    <img className="w-6" src={pause.img} alt="" />
                  ) : (
                    <img className="w-6" src={item.img} alt="" />
                  )
                ) : (
                  <img className="w-6" src={item.img} alt="" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
