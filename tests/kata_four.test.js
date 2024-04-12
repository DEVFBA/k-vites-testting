import { describe, test, expect } from "vitest";
import { countries } from "../katas/kata_four.js";

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

const expectedResult = ["United States", "United Kingdom", "Spain"];

const emptyArray = [];

const expectedEmptyResult = [];

describe("countries", () => {
  test("countries is a function", () => {
    expect(countries).toBeTypeOf("function");
  });

  test("Return array with countries", () => {
    expect(countries(testArray)).toStrictEqual(expectedResult);
    expect(countries(emptyArray)).toStrictEqual(expectedEmptyResult);
  });

  test("Throw error if param is not array", () => {
    expect(() => countries("hola")).toThrowError("array");
  });
});
