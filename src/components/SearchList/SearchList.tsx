import { FormEvent, useState } from "react";
import sendRequest from "../../api/getData";
import "./SearchList.scss";

const SearchList = () => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    console.log(query);
    sendRequest(query);
    setQuery("");
  };

  return (
    <div className="searchList">
      <form className="searchList__form" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="searchList__input"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Search"
        />
      </form>
    </div>
  );
};

export default SearchList;
