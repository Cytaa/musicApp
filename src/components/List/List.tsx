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
              <button
                className="searchList_button"
                onClick={() => handleAddMusic(song)}
              >
                <img
                  className="image"
                  src={song.album.cover_small}
                  alt="album cover"
                />
                <div className="searchList__listItem__text">
                  <p>{song.title}</p>
                  <p>{song.artist.name}</p>
                </div>
              </button>
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
      <button
        className="searchList__more"
        disabled={songs?.length === undefined}
        onClick={() => setNumber(number + 1)}
      >
        <img
          src="https://cdn-icons.flaticon.com/png/512/2609/premium/2609201.png?token=exp=1639950230~hmac=389566ab0e6958010964c5f9b106a891"
          alt="image"
        />
      </button>
    </div>
  );
};

export default List;
