import { FormEvent, useState } from "react";
import getMusic from "../../api/getMusic";
import Music from "../../models/Music";
import List from "../List/List";
import "./SearchList.scss";

// const useRequest = (queryURL: string) => {
//   const [query, setQuery] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);

//   const initRequest = async (): Promise<Array<Music>> => {
//     setLoading(true);
//     const resp = await getMusic(query);
//     setQuery("");
//     setLoading(false);
//     return resp;
//   };

//   return [query, setQuery, initRequest, loading] as const;
// };

const SearchList = () => {
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [songs, setSongs] = useState<Array<Music> | undefined>();

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    setLoading(true);
    e.preventDefault();
    console.log(query);
    const response: Array<Music> = await getMusic(query);
    console.log(response);
    setSongs(response);
    setQuery("");
    setLoading(false);
    console.log();
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
      <List className="serchList__list" songs={songs} />
    </div>
  );
};

export default SearchList;
