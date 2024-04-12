import { artistas_y_ciudades } from "./data/spotify.js";

// export function countriesArtists(object) {
//   let cityCount = {};

//   for (let i = 0; i < object.length; i++) {
//     const { country } = object[i];

//     if (cityCount[country] !== null) {
//       cityCount[country] += 1;
//     } else {
//       cityCount[country] = 1;
//     }
//   }

//   return cityCount;
// }

export function countriesArtists(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Argument arr must be array");
  }
  const countriesArtists = arr.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue.country]) {
      accumulator[currentValue.country] += 1;
    } else {
      accumulator[currentValue.country] = 1;
    }

    return accumulator;
  }, {});

  return countriesArtists;
}
// export function countriesArtists(object) {
//   object.reduce((accumulator, currentValue) => {
//     accumulator[currentValue.country] ??= 0;
//     accumulator[currentValue.country] += 1;

//     return accumulator;
//   }, {});
// }
