import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Playlist from "./components/Playlist/Playlist";
import SearchList from "./components/SearchList/SearchList";
import "./App.scss";
import Music from "./models/Music";
function App() {
  const [playlist, setPlaylist] = useState<Array<Music>>([]);

  const handleAddMusic = (music: Music): void => {
    console.log(music);
    let helper = playlist;
    helper?.push(music);
    console.log(playlist);
    setPlaylist(helper);
  };

  return (
    <div>
      <Navbar />
      <div className="mainComponent">
        <Playlist playlist={playlist} />
        <SearchList handleAddMusic={handleAddMusic} />
      </div>
    </div>
  );
}

export default App;
