"use client";

import { useState } from "react";
import { MovieResults } from "./MovieResults";
import { SearchBar } from "./SearchBar";
import { discoverMovies } from "./tmdb/api";
import { Movie } from "./data/Movie";

export function Home() {
  const [movies, setMovies] = useState(new Array<Movie>());

  let onSearch = async (searchText: string): Promise<void> => {
    let results = discoverMovies(searchText);
    setMovies(await results);
  };

  return (
    <>
      <h1 className="text-center">Find your favorite movie</h1>
      <SearchBar onSearch={onSearch}></SearchBar>
      <MovieResults movies={movies}></MovieResults>
    </>
  );
}
