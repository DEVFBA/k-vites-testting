// export function removeVowels(string) {
//   const strArray = string.split("");
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

//   const newArray = strArray.filter((letter) => {
//     return !vowels.includes(letter);
//   });

//   return newArray.join("");
// }

export function removeVowels(string) {
  return string.replace(/[aeiou]/gi, "");
}
