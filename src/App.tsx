import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Playlist from "./components/Playlist/Playlist";
import SearchList from "./components/SearchList/SearchList";
import { NumberContext } from "./contexts/NumberContext";
import "./App.scss";
import Music from "./models/Music";

function App() {
  const [playlist, setPlaylist] = useState<Array<Music>>([]);

  const handleAddMusic = (music: Music): void => {
    if (playlist.length === 5) return;
    let newList = [...playlist];
    newList.push(music);
    setPlaylist(newList);
  };

  const handleRemoveMusic = (music: Music): void => {
    let newList = [...playlist];

    newList.splice(newList.indexOf(music), 1);

    setPlaylist(newList);
  };

  return (
    <div>
      <Navbar />
      <div className="mainComponent">
        <NumberContext.Provider value={15}>
          <Playlist playlist={playlist} handleRemoveMusic={handleRemoveMusic} />
        </NumberContext.Provider>
        <SearchList handleAddMusic={handleAddMusic} />
      </div>
    </div>
  );
}

export default App;
