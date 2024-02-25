import createClient, { Middleware } from "openapi-fetch";
import { paths } from "../../../tmdb-api";

const apiUrl = "https://api.themoviedb.org";
const accessToken: string =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTE4MDcxMDQyYjQ0Y2I2NTA2NTdhMGJhNjZiYzc4NSIsInN1YiI6IjVhZTcxOGNmOTI1MTQxMGNkNTAwOGNmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MDtIoQp5ZY8nz9L6oo_7lO3TsoLxZ1G6E_pcVVbX3jc";
const authMiddleware: Middleware = {
  async onRequest(req) {
    req.headers.set("Authorization", `Bearer ${accessToken}`);
    return req;
  },
};

export const client = createClient<paths>({ baseUrl: apiUrl });
client.use(authMiddleware);
