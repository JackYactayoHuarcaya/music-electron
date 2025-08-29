import { create } from "zustand";
import { Metadata } from "../../lib/musicsData";
interface MusicStore {
  music: Metadata;
  setMusic: (music: Metadata) => void;
}

export const musicStore = create<MusicStore>((set) => ({
  music: {
    album: "",
    artist: "",
    title: "",
    year: "",
    duration: 0,
    folder: "",
    path: "",
  },
  setMusic: (music: Metadata) => {
    set({ music: music });
  },
}));
