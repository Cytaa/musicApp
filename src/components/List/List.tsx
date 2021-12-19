import React from "react";
import Music from "../../models/Music";
import "../SearchList/SearchList.scss";
import { useState } from "react";

interface ListProps {
  songs?: Array<Music>;
  className: string;
  handleAddMusic: (music: Music) => void;
}

const List = ({ songs, handleAddMusic }: ListProps) => {
  const [number, setNumber] = useState<number>(1);
  return (
    <div>
      <ul className="searchList__list">
        {songs ? (
          songs.slice(0, 5 * number).map((song) => (
            <li key={song.id} className="searchList__listItem">
              <img
                className="image"
                src={song.album.cover_small}
                alt="album cover"
              />
              <div className="searchList__listItem__text">
                <p>{song.title}</p>
                <p>{song.artist.name}</p>
              </div>
              <button onClick={() => handleAddMusic(song)}>add</button>
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
      <button
        disabled={songs?.length === undefined}
        onClick={() => setNumber(number + 1)}
      >
        more
      </button>
    </div>
  );
};

export default List;
