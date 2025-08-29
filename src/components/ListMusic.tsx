import { Metadata } from "../../lib/musicsData";
import { listStore } from "../stores/list";
import imgMenu from "../assets/menu.png";
import imgClose from "../assets/close.png";
import { AnimatePresence, motion } from "framer-motion";
import { musicStore } from "../stores/music";

interface ListMusicProps {
  musics: Metadata[];
  setPlay: React.Dispatch<React.SetStateAction<boolean>>;
  setPosition: React.Dispatch<React.SetStateAction<number>>;
}

export const ListMusic = ({ musics, setPlay, setPosition }: ListMusicProps) => {
  const { active, toggle } = listStore();
  const setMusic = musicStore((state) => state.setMusic);

  return (
    <div className="">
      <button
        onClick={toggle}
        className="no-drag absolute top-3 right-3 p-2 bg-[var(--bg3)] rounded-full"
      >
        <img className="w-3" src={active ? imgClose : imgMenu} alt="" />
      </button>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ left: -300 }}
            animate={{ left: 0 }}
            exit={{ left: -300 }}
            className="h-[98%] overflow-y-scroll rounded-[1rem] z-40 bg-[var(--bg3)] absolute top-1 left-1 "
          >
            <ul>
              {musics.map((music, index) => (
                <li
                  onClick={() => {
                    setMusic({
                      ...music,
                      path: music.path.replace(/\\/g, "/"),
                    });
                    setPlay(false);
                    toggle();
                    setPosition(index);
                  }}
                  key={index}
                  className="no-drag marquee-container w-[300px] overflow-hidden 
            whitespace-nowrap border-b border-purple-500 hover:bg-purple-500 p-2"
                >
                  <p className="inline-block marquee-text">{music.title}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
