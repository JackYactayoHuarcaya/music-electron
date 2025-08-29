import { useState } from "react";
import { Controls } from "../components/Controls";
import { ListMusic } from "../components/ListMusic";
import { useMusics } from "../hooks/handlerMusic";
import { NameMusic } from "../components/NameMusic";

const App = () => {
  const { musics } = useMusics();
  console.log("musics :", musics);
  // play o pause
  const [play, setPlay] = useState(false);
  // position audio
  const [positionAudio, setPositionAudio] = useState(0);
  return (
    <div>
      <NameMusic />
      <Controls
        setPositionAudio={setPositionAudio}
        positionAudio={positionAudio}
        play={play}
        setPlay={setPlay}
      />
      <ListMusic
        setPosition={setPositionAudio}
        setPlay={setPlay}
        musics={musics.musics}
      />
    </div>
  );
};
export default App;
