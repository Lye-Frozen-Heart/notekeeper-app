//Non AI was used to develop the given tests
import { expect, test } from "vitest";
import { validateType } from "../validateType";

test("validateType returns true for correct type", () => {
  const value = 123;
  const type = "number";
  expect(validateType(value, type)).toBe(true);
});

test("validateType returns false for incorrect type", () => {
  const value = "abc";
  const type = "number";
  expect(validateType(value, type)).toBe(false);
});
