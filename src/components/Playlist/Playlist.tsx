import { json } from "stream/consumers";
import Music from "../../models/Music";
import "./Playlist.scss";

interface PlayListProps {
  playlist: Array<Music>;
}

const Playlist = ({ playlist }: PlayListProps) => {
  const handleSavePlaylist = (playlist: Array<Music>): void => {
    localStorage.setItem("playlist", JSON.stringify(playlist));
  };
  return (
    <div className="playlist">
      <div>Your playlist</div>
      <ul>
        {playlist.length > 0 ? (
          playlist.map((song) => (
            <li className="playlist__listItem" key={song.id}>
              <img
                className="image"
                src={song.album.cover_small}
                alt="album cover"
              />
              <div className="playlist__songText">
                <p>{song.title}</p>
                <p>{song.artist.name}</p>
              </div>
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
      <button onClick={() => handleSavePlaylist(playlist)}>
        <img
          src="https://www.svgrepo.com/show/76243/save-icon.svg"
          alt="save icone"
        />
      </button>
    </div>
  );
};

export default Playlist;
