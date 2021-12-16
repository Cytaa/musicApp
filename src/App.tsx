import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Playlist from "./components/Playlist/Playlist";
import SearchList from "./components/SearchList/SearchList";
import "./App.scss";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mainComponent">
        <Playlist />
        <SearchList />
      </div>
    </div>
  );
}

export default App;
