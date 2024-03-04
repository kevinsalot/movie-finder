import { Movie } from "../data/Movie";
import { client } from "./client";
import { imageToUrl } from "./utils";

export async function discoverMovies(title?: string) {
  let movieResults = new Array<Movie>();

  console.log(`Search for: ${title}`);
  const { data, error } = await client.GET("/3/search/movie", {
    params: {
      query: {
        query: title || "",
      }
    }});

  if (data?.results) {
    movieResults = data.results?.map((item) => {
      var movie: Movie = {
        id: item.id || -1,
        title: item.title || "",
        posterImageUrl: imageToUrl(item.poster_path),
      };
      return movie;
    });
  } else {
    console.log(`Oh noes! : ${JSON.stringify(error)}`);
  }
  return movieResults;
}