import { MovieResults } from "./MovieResults";
import { discoverMovies } from "./tmdb/discoverMovies";

export default async function Home() {
  let movieResults = await discoverMovies();

  return (
    <div className="bg-black">
      <h1 className="text-center">Find your favorite movie</h1>
      <MovieResults movies={movieResults}></MovieResults>
    </div>
  );
}
