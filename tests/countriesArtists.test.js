import { describe, test, expect } from "vitest";
import { countriesArtists } from "../katas/countriesArtists.js";

const testArray = [
  {
    artist: "Miley Cyrus",
    country: "United States",
  },
  {
    artist: "FIFTY FIFTY",
    country: "United Kingdom",
  },
  {
    artist: "ROSALÍA",
    country: "Spain",
  },
  {
    artist: "PinkPantheress",
    country: "United Kingdom",
  },
  {
    artist: "Metro Boomin",
    country: "United States",
  },
];

const expectedResult = {
  "United States": 2,
  "United Kingdom": 2,
  Spain: 1,
};

const emptyArray = [];

const expectedEmptyResult = {};

describe("countriesArtists", () => {
  test("countriesArtists is a function", () => {
    expect(countriesArtists).toBeTypeOf("function");
  });

  test("Return object with countries count", () => {
    expect(countriesArtists(testArray)).toStrictEqual(expectedResult);
    expect(countriesArtists(emptyArray)).toStrictEqual(expectedEmptyResult);
  });

  test("Throw error if param is not array", () => {
    expect(() => countriesArtists("hola")).toThrowError("array");
  });
});
