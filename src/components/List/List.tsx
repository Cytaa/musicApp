import React from "react";
import Music from "../../models/Music";
import "../SearchList/SearchList.scss";
import { useState } from "react";

interface ListProps {
  songs?: Array<Music>;
  className: string;
}

const List = ({ songs }: ListProps) => {
  const [number, setNumber] = useState<number>(1);
  return (
    <div>
      <ul className="searchList__list">
        {songs ? (
          songs.slice(0, 5 * number).map((song) => (
            <li key={song.id} className="searchList__listItem">
              <p>{song.title}</p>
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
