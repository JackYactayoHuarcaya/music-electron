import imgPlay from "../assets/play.png";
import imgPause from "../assets/pause.png";
import imgPreview from "../assets/preview.png";
import imgNext from "../assets/next.png";

export const pause = { name: "pause", img: imgPause.toString() };

export const listControls = [
  {
    name: "preview",
    img: imgPreview.toString(),
  },
  {
    name: "play",
    img: imgPlay.toString(),
  },
  {
    name: "next",
    img: imgNext.toString(),
  },
];
