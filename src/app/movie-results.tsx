import { Movie } from "./data/Movie";
import { MovieTile } from "./movie-tile";

export interface MovieResultsProps {
  movies: Array<Movie>;
}

export function MovieResults(movieResultsProps: MovieResultsProps) {
  const items = movieResultsProps.movies.map((movie: Movie) => (
    <li>
      <MovieTile title={movie.title} posterImageUrl={movie.posterImageUrl} />
    </li>
  ));

  return <ul>{items}</ul>;
}
