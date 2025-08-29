import { create } from "zustand";
import { Metadata } from "../../lib/musicsData";

type ListStore = {
  active: boolean;
  toggle: () => void;
  listMusic: Metadata[];
  setLisMusic: (musics: Metadata[]) => void;
};

export const listStore = create<ListStore>((set) => ({
  active: false,
  toggle: () => set((state) => ({ active: !state.active })),
  listMusic: [],
  setLisMusic: (musics: Metadata[]) => set({ listMusic: musics }),
}));
