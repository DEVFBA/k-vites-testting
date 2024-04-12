import { describe, expect, expectTypeOf, test } from "vitest";
import { removeVowels } from "../katas/removeVowels.js";

describe("removeVowels", () => {
  test("removeVowels is a function", () => {
    expect(removeVowels).toBeTypeOf("function");
  });
});
