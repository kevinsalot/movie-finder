export interface MoviePosterProps {
  title: string;
  posterImageUrl: string;
}

export function MovieTile(moviePosterProps: MoviePosterProps) {
  return (
    <div className="w-44 rounded-sm p-1 hover:outline-violet-600 hover:outline hover:outline-4">
      <img
        className="w-full"
        src={moviePosterProps.posterImageUrl}
        alt={moviePosterProps.title}
      />
      <p className="text-center">{moviePosterProps.title}</p>
    </div>
  );
}
