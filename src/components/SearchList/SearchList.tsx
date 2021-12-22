import { FormEvent, useState } from "react";
import getMusic from "../../api/getMusic";
import Music from "../../models/Music";
import List from "../List/List";
import "./SearchList.scss";

interface SearchListProps {
  handleAddMusic: (music: Music) => void;
}

const SearchList = ({ handleAddMusic }: SearchListProps) => {
  const [query, setQuery] = useState<string>("");
  const [songs, setSongs] = useState<Array<Music> | undefined>();

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    const response: Array<Music> = await getMusic(query);

    setSongs(response);

    setQuery("");
  };

  return (
    <div className="searchList">
      <form
        className="searchList__form"
        onSubmit={async (e) => await handleSubmit(e)}
      >
        <input
          className="searchList__input"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Search"
        />
      </form>
      <List
        className="serchList__list"
        songs={songs}
        handleAddMusic={handleAddMusic}
      />
    </div>
  );
};

export default SearchList;
