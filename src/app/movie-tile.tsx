export interface MoviePosterProps {
  title: string;
  posterImageUrl: string;
}

export function MoviePoster(moviePosterProps: MoviePosterProps) {
  return (
    <div>
      <img src={moviePosterProps.posterImageUrl} alt={moviePosterProps.title} />
      <p>{moviePosterProps.title}</p>
    </div>
  );
}
