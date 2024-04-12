import { describe, expect, test } from "vitest";
import { iva } from "../katas/iva.js";

describe("IVA", () => {
  test("IVA is a function", () => {
    expect(iva).toBeTypeOf("function");
  });

  test("Returns 16% of the amount", () => {
    expect(iva(100)).toBe(16);
    expect(iva(0)).toBe(0);
    expect(iva(1)).toBe(0.16);
  });

  test("Input Validations", () => {
    expect(() => iva("hola")).toThrowError();
  });
});
