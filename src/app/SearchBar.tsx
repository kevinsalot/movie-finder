import { useState } from "react";

export interface SearchBarProps {
  onSearch: (searchText: string) => Promise<void>;
}

export function SearchBar(searchBarProps: SearchBarProps) {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="p-2 text-right">
      <input
        className="m-2 text-black"
        placeholder="Shooting Location"
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <button
        className="p-2 outline"
        onClick={() => searchBarProps.onSearch(searchText)}
      >
        Search
      </button>
    </div>
  );
}
