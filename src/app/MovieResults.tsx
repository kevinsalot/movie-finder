import { Movie } from "./data/Movie";
import { MovieTile } from "./MovieTile";

export interface MovieResultsProps {
  movies: Array<Movie>;
}

export function MovieResults(movieResultsProps: MovieResultsProps) {
  const items = movieResultsProps.movies.map((movie: Movie) => (
    <li className="p-2" key={movie.id}>
      <MovieTile title={movie.title} posterImageUrl={movie.posterImageUrl} />
    </li>
  ));

  return <ul className="flex flex-wrap">{items}</ul>;
}
