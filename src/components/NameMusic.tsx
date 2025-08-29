import { musicStore } from "../stores/music";

export const NameMusic = () => {
  const music = musicStore((state) => state.music);
  return (
    <div className="marquee-container2 pt-2">
      <p className="marquee-text">{music.title}</p>
    </div>
  );
};
