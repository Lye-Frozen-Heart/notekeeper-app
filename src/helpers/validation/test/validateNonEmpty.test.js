//Non AI was used to develop the given tests
import { expect, test } from "vitest";
import { validateNonEmpty } from "../validateNonEmpty";

test("validateNonEmpty returns true for non-empty value", () => {
  const value = "hello";
  expect(validateNonEmpty(value)).toBe(true);
});

test("validateNonEmpty returns false for empty value", () => {
  const value = "";
  expect(validateNonEmpty(value)).toBe(false);
});
