import { ImageHost } from "./constants";

export function imageToUrl(imagePath: string | undefined) : string {
  let path = "/t/p/w500/" + (imagePath || "404.jpg");
  let url = new URL(path, ImageHost);
  return url.toString();
}