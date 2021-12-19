import Music from "../../models/Music";
import "./Playlist.scss";

interface PlayListProps {
  playlist: Array<Music>;
}

const Playlist = ({ playlist }: PlayListProps) => {
  return (
    <div className="playlist">
      <ul className="searchList">
        {playlist.length > 0 ? (
          playlist.map((song) => (
            <li className="searchList__listItem" key={song.id}>
              <img
                className="image"
                src={song.album.cover_small}
                alt="album cover"
              />
              <div>
                <p>{song.title}</p>
                <p>{song.artist.name}</p>
              </div>
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

export default Playlist;
