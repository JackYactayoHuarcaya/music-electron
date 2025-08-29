import { useEffect, useState } from "react";
import { Metadata } from "../../lib/musicsData";
import { listStore } from "../stores/list";

type Response = { success: boolean; musics: Metadata[] };

export const useMusics = () => {
  const setListMusics = listStore((e) => e.setLisMusic);
  const [musics, setMusics] = useState<Response>({
    success: false,
    musics: [],
  });
  useEffect(() => {
    window.ipcRenderer.send("get-musics");
    window.ipcRenderer.on("musics", (_event, musics) => {
      setMusics(musics);
      setListMusics(musics.musics);
    });
  }, [setListMusics]);
  return {
    musics,
  };
};
