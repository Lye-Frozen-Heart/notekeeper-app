import { expect, test } from "vitest";
import { validateEnum } from "../validateEnum";

test("validateEnum returns true if the parameter value is a valid enum value.", () => {
  const enumValues = ["pending", "in progress", "done"];
  const value = "pending";
  expect(validateEnum(value, enumValues)).toBe(true);
});

test("validateEnum returns false if the parameter value is not a valid enum value.", () => {
  const enumValues = ["pending", "in progress", "done"];
  const value = "invalid";
  expect(validateEnum(value, enumValues)).toBe(false);
});
