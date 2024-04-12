import { artistas_y_ciudades } from "./data/spotify.js";

export function countries(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Argument arr must be array");
  }
  return arr.reduce((accumulator, currentValue) => {
    if (accumulator.indexOf(currentValue.country) < 0) {
      accumulator.push(currentValue.country);
    }

    return accumulator;
  }, []);
}
