import Music from "../../models/Music";
import List from "../List/List";
import "./Playlist.scss";

interface PlayListProps {
  playlist: Array<Music>;
}

const Playlist = ({ playlist }: PlayListProps) => {
  return (
    <div className="playlist">
      <List songs={playlist} className="searchList" />
    </div>
  );
};

export default Playlist;
