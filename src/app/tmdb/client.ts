import createClient, { Middleware } from "openapi-fetch";
import { paths } from "../../../tmdb-api";
import { tmdbAccessToken } from "../../../private";

const apiUrl = "https://api.themoviedb.org";
const authMiddleware: Middleware = {
  async onRequest(req) {
    req.headers.set("Authorization", `Bearer ${tmdbAccessToken}`);
    return req;
  },
};

export const client = createClient<paths>({ baseUrl: apiUrl });
client.use(authMiddleware);
